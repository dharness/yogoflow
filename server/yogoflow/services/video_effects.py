import tempfile
from moviepy.editor import VideoFileClip, ImageClip, CompositeVideoClip
from yogoflow.config import YOGA_POSE_NAMES


def add_text_overlay(file_path, text, outfile_path):
  clip = VideoFileClip(file_path)
  clips = [clip]

  if text in YOGA_POSE_NAMES:
    img_overlay_path = f"./yogoflow/assets/{text}.png"
    img_clip = ImageClip(img_overlay_path)

    img_clip = img_clip.set_pos('center').set_duration(clip.duration)
    clips.append(img_clip)

  comp = CompositeVideoClip(clips)
  comp.write_videofile(outfile_path, fps=clip.fps)
