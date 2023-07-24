from datetime import timedelta
from time import sleep

import requests
from requests.adapters import HTTPAdapter, Retry

from yogoflow.config import DEFAULT_POSE, ROBOFLOW_API_KEY, ROBOFLOW_MODEL_NAME, ROBOFLOW_MODEL_VERSION, ROBOFLOW_URL
from yogoflow.services.encoding import get_base64


"""
Model for predicting yoga pose from image
"""


class TestSetup:
  def __init__(self):
    print("TestSetup init")


class PoseModel:
  def __init__(self):
    retries = Retry(total=5, backoff_factor=0.1,
                    status_forcelist=[500, 502, 503, 504])
    self.session = requests.Session()
    self.session.mount('http://', HTTPAdapter(max_retries=retries))

  def _format_response(self, api_response):
    top = api_response.get('top')
    confidence = api_response.get('confidence')
    return {
        'value': top,
        'confidence': confidence
    }

  def prdict_api(self, image_url):
    try:
      image_base64 = get_base64(image_url)
      params = {"api_key": ROBOFLOW_API_KEY}
      headers = {"Content-Type": "application/x-www-form-urlencoded"}
      response = self.session.post(
          ROBOFLOW_URL, params=params, data=image_base64, headers=headers)

      result = self._format_response(response.json())
      return result

    except Exception as e:
      print(e)
      return {'value': DEFAULT_POSE, 'confidence': 0}

  def predict_many(self, image_urls):
    predictions = []
    total = len(image_urls)
    for i, image_url in enumerate(image_urls):
      print(f'predicting: {i+1}/{total}', end='\r')

      prediction = self.prdict_api(image_url)
      predictions.append(prediction)

    return predictions


pose_model = PoseModel()
