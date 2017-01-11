"""
Utility functions accessed by model objects and the Applicant API
"""

from __future__ import unicode_literals
import pytz
from datetime import datetime


def now():
    return datetime.utcnow().replace(tzinfo=pytz.UTC)
