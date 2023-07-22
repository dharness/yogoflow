import tempfile
from moviepy.editor import VideoFileClip, ImageClip, CompositeVideoClip
from yogoflow.config import YOGA_POSE_NAMES


class StyledVideo:
  def __init__(self, file_path):
    self.clip = VideoFileClip(file_path)
    self.clips = [self.clip]

  def add_text_overlay(self, text, start, end):
    if text in YOGA_POSE_NAMES:
      img_overlay_path = f"./yogoflow/assets/{text}.png"
      img_clip = ImageClip(img_overlay_path)

      img_clip = img_clip.set_pos('center').set_start(start).set_end(end)
      self.clips.append(img_clip)

  def write(self, outfile_path):
    comp = CompositeVideoClip(self.clips)
    comp.write_videofile(outfile_path, fps=self.clip.fps)
