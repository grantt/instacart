from __future__ import unicode_literals


class Config(object):
    DEBUG = True
    TESTING = True
    CSRF_ENABLED = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///../db/development.sqlite3"