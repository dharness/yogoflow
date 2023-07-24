from moviepy.editor import AudioFileClip, VideoFileClip, ImageClip, CompositeVideoClip
from yogoflow.config import BACKGROUND_TRACKS, YOGA_POSE_NAMES


class StyledVideo:
  def __init__(self, file_path):
    self.clip = VideoFileClip(file_path)
    self.clips = [self.clip]

  def add_text_overlay(self, text, start, end, pos):
    if text in YOGA_POSE_NAMES:
      img_overlay_path = f"./yogoflow/assets/{text}.png"
      img_clip = ImageClip(img_overlay_path)

      # Resize the image clip to a fraction of the with of the video clip
      next_width = self.clip.w // 3
      img_clip = img_clip.resize(width=next_width)
      margin = 18

      # Get the dimensions of the clip
      clip_width, _ = self.clip.size

      left_pos = (margin, margin)
      right_pos = (clip_width - img_clip.w - margin, margin)
      img_pos = left_pos if pos == 'left' else right_pos

      img_clip = img_clip.set_pos(img_pos).set_start(start).set_end(end)
      self.clips.append(img_clip)

  def add_background_track(self, track_name):
    if track_name in BACKGROUND_TRACKS:
      track_path = f"./yogoflow/assets/music/{track_name}.png"
      audio_clip = AudioFileClip(track_path).duration(self.clip.duration)
      self.clip.set_audio(audio_clip)

  def write(self, outfile_path):
    comp = CompositeVideoClip(self.clips)
    comp.write_videofile(outfile_path, fps=self.clip.fps)
