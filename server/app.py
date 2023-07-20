from services.pose_service import PoseService
from dotenv import load_dotenv
from flask import Flask
from flask_restful import Api

from routes.video import VideoApi
load_dotenv()


app = Flask(__name__)
api = Api(app)

api.add_resource(VideoApi, '/api/video')

PoseService.init()


if __name__ == '__main__':
  app.run(debug=True)
