from __future__ import unicode_literals

import os.path


class Config(object):
    DEBUG = True
    TESTING = True
    CSRF_ENABLED = True
    SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']