import base64
import hashlib


# Encode image to base64
def get_base64(img_url):
  with open(img_url, "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    return encoded_string


# Decode base64 to image
def sha256_hash_file(file_path):
  sha256_hash = hashlib.sha256()
  with open(file_path, 'rb') as file:
    # Read the file in chunks to handle large files efficiently
    for chunk in iter(lambda: file.read(4096), b''):
      sha256_hash.update(chunk)
  return sha256_hash.hexdigest()
