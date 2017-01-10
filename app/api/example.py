"""
This module details the operations available on the /example endpoint for single
Resources.
"""
from __future__ import unicode_literals

from flask import session
from flask_restful import Resource
# from app.models.example import Example, ExampleSchema


class ExampleResource(Resource):
    """
    Simple resource returning the logged in user
    """
    def get(self, example_id):
        """
        Get an example
        """
        # example = User.resolve(example_id)
        # schema = ExampleSchema()
        # result = schema.dump(example)
        # return result.data
