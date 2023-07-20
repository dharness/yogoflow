import tempfile
from flask import request, send_file
from flask_restful import Resource
from services.pose_service import PoseService
from services.video_effects import add_text_overlay


class VideoApi(Resource):
  def post(self):
    video_file = request.files.get('video_file')
    if (video_file is None):
      return {'error': 'missing video_file'}, 400

    with tempfile.NamedTemporaryFile(suffix=".mp4", delete=False) as temp_in:
      file_name = temp_in.name

      # download the file
      video_file.save(file_name)

      # Detect what pose is being done
      pose_name = PoseService.get_pose_from_video(file_name)

      # add the text overlay
      with tempfile.NamedTemporaryFile(suffix=".mp4", delete=False) as temp_out:
        outfile_path = temp_out.name
        add_text_overlay(file_name, pose_name, outfile_path)

        return send_file(outfile_path)
