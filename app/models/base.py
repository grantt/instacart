from __future__ import unicode_literals

import json


class BaseModel(object):

    def get_id(self):
        return unicode(self.id)

    @classmethod
    def resolve(cls, id_):
        return cls.query.filter_by(id=id_).first()

    @classmethod
    def resolve_all(cls,):
        return cls.query.all()