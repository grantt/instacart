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
    API resource representing a single applicant. Available for get and put.
    """
    def get(self, applicant_id):
        """
        Get an applicant
        """
        applicant = Applicant.resolve(applicant_id)
        schema = ApplicantSchema()
        result = schema.dump(applicant)
        return result.data

    def put(self, applicant_id):
        """
        Update an applicant's data
        """
        applicant = Applicant.resolve(applicant_id)
        if not applicant:
            return '', 404

        schema = ApplicantSchema()
        result = schema.load(request.json)
        for key in set(result.data.keys()).difference(Applicant.__restricted_fields__):
            setattr(applicant, key, result.data.get(key))

        db.session.commit()
        schema = ApplicantSchema()
        result = schema.dump(applicant)
        return result.data, 201


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
        for field in Applicant.__restricted_fields__.intersection(set(result.data.keys())):
            del result.data[field]
        applicant = Applicant(**result.data)
        db.session.add(applicant)
        db.session.commit()
        result = schema.dump(applicant)

        return result.data