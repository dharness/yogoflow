import os
from pprint import pprint
from time import sleep
import cv2
from roboflow import Roboflow
from yogoflow.config import ROBOFLOW_API_KEY, ROBOFLOW_MODEL_NAME, ROBOFLOW_MODEL_VERSION


def main():
  rf = Roboflow(api_key=ROBOFLOW_API_KEY)
  project = rf.workspace().project(ROBOFLOW_MODEL_NAME)
  model = project.version(ROBOFLOW_MODEL_VERSION).model
  urls = _get_frame_from_video('./tests/test.mp4', './frames')

  for i, url in enumerate(urls):
    if i % 30 != 0:
      continue
    sleep(0.01)
    print(url)
    result = model.predict(url).json()
    # pprint(result)


def _get_frame_from_video(video_path, out_dir):
  if not os.path.exists(out_dir):
    os.makedirs(out_dir)
  urls = []
  i = 0
  video = cv2.VideoCapture(video_path)
  while True:
    ret, frame = video.read()
    if not ret:
      break
    i += 1
    file_name = f"{out_dir}/{i:04}.png"
    cv2.imwrite(file_name, frame)
    urls.append(file_name)

  video.release()
  return urls


if __name__ == '__main__':
  main()
