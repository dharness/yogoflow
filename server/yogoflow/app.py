from dotenv import load_dotenv
load_dotenv()

from yogoflow.services.pose_model import pose_model
from yogoflow.routes.video import VideoApi
from flask import Flask
from flask_restful import Api, Resource
from flask_cors import CORS


class Health(Resource):
  def get(self):
    return 200


def create_app():

  app = Flask(__name__)
  CORS(app)
  api = Api(app)

  api.add_resource(Health, '/health')
  api.add_resource(VideoApi, '/api/video')

  return app
