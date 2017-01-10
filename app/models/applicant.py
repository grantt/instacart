"""
Model of our Applicant
"""

from __future__ import unicode_literals

from app import db
from app.models.base import BaseModel
import utils


class Applicant(db.Model, BaseModel):
    """
    Represents an Instacart shopper applicant
    """
    __tablename__ = 'applicants'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    first_name = db.Column(db.String(128))
    last_name = db.Column(db.String(128))
    region = db.Column(db.String(128))
    email = db.Column(db.Unicode(256), index=True, unique=True)
    phone = db.Column(db.String(128))
    phone_type = db.Column(db.String(128))
    source = db.Column(db.String(128))
    over_21 = db.Column(db.Boolean)
    created_at = db.Column(db.DateTime, default=utils.now, nullable=False)
    updated_at = db.Column(db.DateTime, default=utils.now, nullable=False, onupdate=utils.now)

    def __repr__(self):
        return '<Applicant({id}) {name}>'.format({
            'id': self.id,
            'name': '{} {}'.format(self.first_name, self.last_name),
        })

