import os
import shutil
from tempfile import TemporaryDirectory, NamedTemporaryFile
from flask import after_this_request, request, send_file
from flask_restful import Resource
from yogoflow.services.encoding import sha256_hash_file
from yogoflow.services.pose_model import pose_model
from yogoflow.services.prediction_analysis import quantize_predictions
from yogoflow.services.video_processor import video_processor
from yogoflow.services.video_effects import StyledVideo

VIDEO_CHUNK_SIZE = 30
FPS = 30


def chunk_to_seconds(chunk_number):
  return chunk_number * VIDEO_CHUNK_SIZE / FPS


prediction_cache = {}


class VideoApi(Resource):
  def post(self):
    video_file = request.files.get('video_file')
    caption_position = request.form.get('caption_position')
    if (video_file is None):
      return {'error': 'missing video_file'}, 400

    # Create temp files
    in_file = NamedTemporaryFile(suffix=".mp4", delete=False).name
    out_file = NamedTemporaryFile(suffix=".mp4", delete=False).name
    frames_dir = TemporaryDirectory().name

    # Cleanup temp files
    @after_this_request
    def cleanup(response):
      os.remove(in_file)
      shutil.rmtree(frames_dir, ignore_errors=True)
      return response

    # Process the video
    video_file.save(in_file)
    file_paths = video_processor.extract_frames(
        in_file, frames_dir, step_size=VIDEO_CHUNK_SIZE)

    # Predict the poses
    file_hash = sha256_hash_file(in_file)
    predictions = prediction_cache.get(file_hash)
    if (predictions is None):
      predictions = pose_model.predict_many(file_paths)
      prediction_cache[file_hash] = predictions

    # Quantize the poses
    video_sections = quantize_predictions(predictions)

    # Add the effects to the video for each section
    styled_video = StyledVideo(in_file)
    for video_section in video_sections:
      text = video_section.get('value')
      start = video_section.get('start')
      end = video_section.get('end')

      if None in [text, start, end]:
        continue

      styled_video.add_text_overlay(
          text, chunk_to_seconds(start), chunk_to_seconds(end), caption_position)

    # Render the video, and return it to the client
    styled_video.write(out_file)
    return send_file(out_file, mimetype='video/mp4')
