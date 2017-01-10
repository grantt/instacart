"""
All flask generated views for the boilerplate app
"""

from __future__ import unicode_literals

from flask import request, redirect, session, render_template, url_for
from app import application

@application.route('/')
def index():
    return render_template('index.html')