from dotenv import load_dotenv
from flask import Flask
from flask_restful import Api

from yogoflow.routes.video import VideoApi
from yogoflow.services.pose_model import pose_model
load_dotenv()


def create_app():

  app = Flask(__name__)
  api = Api(app)

  api.add_resource(VideoApi, '/api/video')

  return app
