import os
import shutil
import tempfile
from tempfile import TemporaryDirectory, NamedTemporaryFile
from flask import after_this_request, request, send_file
from flask_restful import Resource
from yogoflow.services.pose_model import pose_model
from yogoflow.services.video_processor import video_processor
from yogoflow.services.video_effects import add_text_overlay


class VideoApi(Resource):
  def post(self):
    print("POST /api/video")
    video_file = request.files.get('video_file')
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
        in_file, frames_dir, step_size=30)

    # Predict the poses
    predictions = pose_model.predict_many(file_paths)

    # Quantize the poses
    print(predictions)

    # Style the video
    # texts = [
    #   {'text': 'standing', 'start': 0, 'end': 1},
    #   {'text': 'squatting', 'start': 1, 'end': 2},
    #   {'text': 'standing', 'start': 0, 'end': 1},
    #   {'text': 'standing', 'start': 0, 'end': 1},
    #   {'text': 'standing', 'start': 0, 'end': 1},
    # ]
    pose_name = 'standing'
    add_text_overlay(in_file, pose_name, out_file)

    return send_file(out_file, mimetype='video/mp4')
