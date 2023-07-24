from pathlib import Path

from yogoflow.services.video_processor import video_processor


test_video_path = str(Path(__file__).parent / "test.mp4")
out_dir = str(Path(__file__).parent / "out" / "frames")


def test_extract_frames():
  urls = video_processor.extract_frames(test_video_path, out_dir, step_size=30)
  assert len(urls) == 30


def test_extract_frames_error():
  bad_path = "not_a_real_file.mp4"
  urls = video_processor.extract_frames(bad_path, out_dir, step_size=30)
  assert len(urls) == 0
