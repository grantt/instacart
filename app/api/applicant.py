"""
This module details the operations available on the /example endpoint for single
Resources.
"""
from __future__ import unicode_literals

from flask import session
from flask_restful import Resource
from app.models.applicant import Applicant, ApplicantSchema


class ApplicantResource(Resource):
    """
    Simple resource returning an applicant
    """
    def get(self, applicant_id):
        """
        Get an example
        """
        applicant = Applicant.resolve(applicant_id)
        schema = ApplicantSchema()
        result = schema.dump(applicant)
        return result.data
