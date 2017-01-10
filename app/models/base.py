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

    def to_json(self):
        dict_repr = {k: getattr(self, k) for k in self.__public_fields__}
        return json.dumps(dict_repr)
