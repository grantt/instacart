from __future__ import unicode_literals

from flask import Flask
from flask_restful import Api
from flask.ext.sqlalchemy import SQLAlchemy

from config import Config

application = Flask(__name__)
application.config.from_object(Config)
app_api = Api(application)

db = SQLAlchemy(application, session_options={'expire_on_commit': False})

import views
import models
from api import applicant

# Applicants
app_api.add_resource(applicant.ApplicantResource, '/applicants/<applicant_id>')
