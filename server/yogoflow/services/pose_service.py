from pprint import pprint
import tempfile
from roboflow import Roboflow
from supervision import get_video_frames_generator
import cv2
import os


from yogoflow.config import ROBOFLOW_API_KEY, ROBOFLOW_MODEL_NAME, ROBOFLOW_MODEL_VERSION
DEFAULT_POSE = 'no-pose'


class PoseService:
  model = None

  @classmethod
  def init(cls):
    rf = Roboflow(api_key=ROBOFLOW_API_KEY)
    project = rf.workspace().project(ROBOFLOW_MODEL_NAME)
    cls.model = project.version(ROBOFLOW_MODEL_VERSION).model

  @classmethod
  def get_pose_from_video(cls, video_path):
    with tempfile.NamedTemporaryFile(suffix=".png", delete=False) as tmp_frame:
      img_path = tmp_frame.name
      _get_frame_from_video(video_path, img_path)
      prediction = cls._predict(img_path)
      return prediction.get('pose', DEFAULT_POSE)

  @classmethod
  def _predict(cls, image_path):
    result = cls.model.predict(image_path).json()
    prediction = result.get('predictions', [])[0]
    top = prediction.get('top')
    confidence = prediction.get('confidence')
    return {
      'pose': top,
      'confidence': confidence
    }


def _get_frame_from_video(video_path, out_path):
  video = cv2.VideoCapture(video_path)
  ret, frame = video.read()
  cv2.imwrite(out_path, frame)
  video.release()
