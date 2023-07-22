from pathlib import Path


test_video_path = Path(__file__).parent / "test.mp4"
out_dir = Path(__file__).parent / "out"


def test_edit_user(client):
  response = client.post("/api/video", data={
      "video_file": test_video_path.open('rb'),
  })

  assert response.status_code == 200
  assert response.content_type == 'video/mp4'

  file_content = response.data

  assert file_content is not None
  assert len(file_content) > 0

  with open(out_dir / 'out.mp4', 'wb') as f:
    f.write(file_content)
