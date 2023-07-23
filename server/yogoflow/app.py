from dotenv import load_dotenv
load_dotenv()

from yogoflow.services.pose_model import pose_model
from yogoflow.routes.video import VideoApi
from flask import Flask
from flask_restful import Api
from flask_cors import CORS


def create_app():

  app = Flask(__name__)
  api = Api(app)
  CORS(app)

  api.add_resource(VideoApi, '/api/video')

  return app
