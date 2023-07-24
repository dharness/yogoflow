import os
import cv2


class VideoProcessor:
  # Extract frames from a video
  def extract_frames(self, video_path, out_dir, step_size=1):
    urls = []
    print(f"Extracting frames from {video_path} to {out_dir}")
    try:
      frame_number = 1
      video = cv2.VideoCapture(video_path)

      if not os.path.exists(out_dir):
        os.makedirs(out_dir)

      while True:
        ret, frame = video.read()

        if not ret:
          break

        frame_number += 1
        if frame_number % step_size != 0:
          continue

        file_name = f"{out_dir}/{frame_number:04}.png"
        cv2.imwrite(file_name, frame)
        urls.append(file_name)

      video.release()

    except Exception as e:
      print(f"Error: {e}")

    return urls


video_processor = VideoProcessor()
