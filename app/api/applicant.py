"""
This module details the operations available on the /applicants endpoint for single
Resources and Collections.
"""
from __future__ import unicode_literals

from flask import request
from flask_restful import Resource
from app import db
from app.models.applicant import Applicant, ApplicantSchema


class ApplicantResource(Resource):
    """
    API resource representing a single applicant. Available for get.
    """
    def get(self, applicant_id):
        """
        Get an applicant
        """
        applicant = Applicant.resolve(applicant_id)
        schema = ApplicantSchema()
        result = schema.dump(applicant)
        return result.data


class ApplicantCollection(Resource):
    """
    API Resource representing a collection of Applicants. Available for post.
    """

    def post(self):
        """
        Create a new applicant to persist in the database
        """
        schema = ApplicantSchema()
        result = schema.load(request.json)
        applicant = Applicant(workflow_state='quiz_started', **result.data)
        db.session.add(applicant)
        db.session.commit()
        result = schema.dump(applicant)

        return result.data