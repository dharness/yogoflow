import os


ROBOFLOW_MODEL_VERSION = 1
ROBOFLOW_MODEL_NAME = "yoga-pose-detection-2.0"
ROBOFLOW_API_KEY = os.environ.get('ROBOFLOW_API_KEY')
YOGA_POSE_NAMES = ["squatting", "standing", "sidebend"]
BACKGROUND_TRACKS = []
DEFAULT_POSE = 'no-pose'
ROBOFLOW_URL = "https://classify.roboflow.com/yoga-pose-detection-2.0/1"
