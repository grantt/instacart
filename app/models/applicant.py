"""
Model of our Applicant
"""

from __future__ import unicode_literals

from marshmallow import fields, Schema

from app import db
from app.models.base import BaseModel
import utils


class Applicant(db.Model, BaseModel):
    """
    Represents an Instacart shopper applicant
    """
    __tablename__ = 'applicants'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    first_name = db.Column(db.String(128), nullable=False)
    last_name = db.Column(db.String(128), nullable=False)
    region = db.Column(db.String(128), nullable=False)
    email = db.Column(db.Unicode(256), index=True, unique=True, nullable=False)
    phone = db.Column(db.String(128))
    phone_type = db.Column(db.String(128))
    source = db.Column(db.String(128))
    reason = db.Column(db.Text)
    workflow_state = db.Column(db.String(128))
    over_21 = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, default=utils.now, nullable=False)
    updated_at = db.Column(db.DateTime, default=utils.now, nullable=False, onupdate=utils.now)

    def __repr__(self):
        return '<Applicant({id}) {name}>'.format({
            'id': self.id,
            'name': '{} {}'.format(self.first_name, self.last_name),
        })


class ApplicantSchema(Schema):
    id = fields.Int()
    first_name = fields.Str()
    last_name = fields.Str()
    region = fields.Str()
    email = fields.Email()
    phone = fields.Str()
    phone_type = fields.Str()
    source = fields.Str()
    reason = fields.Str()
    workflow_state = fields.Str()
    over_21 = fields.Bool()
    created_at = fields.DateTime()
    updated_at = fields.DateTime()
