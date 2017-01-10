"""
Utility functions accessed by model objects and the Applicant API
"""

from __future__ import unicode_literals
from datetime import datetime


def now():
    return datetime.now()
