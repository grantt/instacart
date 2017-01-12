"""
This module details the operations available on the /funnels endpoint for single Resources.
"""
from __future__ import unicode_literals

import json
from datetime import timedelta
from collections import defaultdict

from flask_restful import Resource, reqparse, inputs
from app.models.applicant import Applicant


class FunnelsResource(Resource):
    """
    API resource representing an applicant funnel analysis. Available for get.
    """
    def get(self):
        """
        Get funnels for provided dates in querystring
        """

        result = defaultdict(lambda: defaultdict(int))

        parser = reqparse.RequestParser()
        parser.add_argument(
            'start_date',
            location='args',
            type=inputs.date,
            help='Start date to analyze applicant funnel'
        )
        parser.add_argument(
            'end_date',
            location='args',
            type=inputs.date,
            help='Start date to analyze applicant funnel'
        )
        args = parser.parse_args()
        start_date = args.get('start_date')
        end_date = args.get('end_date')

        # Query for specific columns while filtering but not actually resolving the obejcts until the loop below
        applicants = Applicant.query.with_entities(Applicant.created_at, Applicant.workflow_state).filter(
            Applicant.created_at >= start_date
        ).filter(
            Applicant.created_at <= end_date
        ).order_by(Applicant.created_at)

        for created_at, workflow_state in applicants:
            # Monday(0) to Sunday(6) bucketing
            week_start = created_at - timedelta(days=created_at.weekday())
            week_end = created_at + timedelta(days=6 - created_at.weekday())

            if week_start < start_date:
                week_start = start_date

            if week_end > end_date:
                week_end = end_date

            bucket = '{}-{}'.format(
                week_start.strftime('%Y-%m-%d'),
                week_end.strftime('%Y-%m-%d')
            )

            result[bucket][workflow_state] += 1

        return result
