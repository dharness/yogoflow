import base64


def get_base64(img_url):
  with open(img_url, "rb") as image_file:
    encoded_string = base64.b64encode(image_file.read())
    return encoded_string
