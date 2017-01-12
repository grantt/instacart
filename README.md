# Instacart Challenge #
## Introduction ##
Building a shopper-oriented landing page with applicant tracking. There are two main components, a customer-facing landing page to gather details on shoppers, and a applicant analysis API endpoint.

## Structure ##
This application is built on a Python backend with [Flask](http://flask.pocoo.org/) as the web framework. Flask is a nice choice because it is lightweight, yet highly extensible. 

In order to interact with our SQLite database I chose [SQLAlchemy](http://www.sqlalchemy.org/) as the ORM, specifically via the Flask extension [Flask-SQLAlchemy](http://flask-sqlalchemy.pocoo.org/2.1/). SQLAlchemy primarily demonstrates it's usefulness in large applications with complex database relations, but for this small project, I chose it because it cleanly handles data filtering on the model side without a lot of computational overhead. 

For API construction, I chose [Flask-RESTful](http://flask-restful-cn.readthedocs.io/en/0.3.5/). It provides the necessary abstraction to quickly and easily develop a robust, RESTful API. Furthermore, as an application expands in scope and complexity, I've found Flask-RESTful to be adept at handling scaling challenges.

The front-end of the application is constructed as a [React](https://facebook.github.io/react/) application with [Reflux](https://github.com/reflux/refluxjs) handling data storage and flow. This combination is particularly powerful because of the capability of data stores to listen to actions, making adherence to uni-directional data flow easily managed.

Styling of the application is done via [SASS](http://sass-lang.com/) with building of front-end assets accomplished by [gulp](http://gulpjs.com/).

## Install and Run the Application ##
```sh
git clone git@github.com:grantt/instacart.git
pip install virtualenv
mkvirtualenv instacart
pip install -r requirements.txt
npm install
gulp build
python run.py
```

Navigate to localhost:5000.

## API ##
Resources
___
__Applicant__
Endpoint
`/applicants/{id}`

Available Methods
`GET`, `POST`, `PUT`

Attributes
| Attribute      | Type     | Description                                                               |
| -------------- | -------- | ------------------------------------------------------------------------- |
| id             | int      | Unique identifier of the applicant                                        |
| first_name     | string   | First name of the applicant                                               |
| last_name      | string   | Last name of the applicant                                                |
| region         | string   | Geographic location of the applicant                                      |
| email          | string   | Email address of the applicant                                            |
| phone          | string   | Phone number of the applicant                                             |
| phone_type     | string   | Description of the applicant's phone or device                            |
| source         | string   | How the applicant learned of Instacart                                    |
| reason         | string   | Additional information about the source of the applicant                  |
| workflow_state | string   | Descriptor of where in the application process the applicant currently is |
| over_21        | boolean  | Is the applicant 21 or older?                                             |
| created_at     | datetime | The timestamp the applicant first was persisted in the database           |
| updated_at     | datetime | The timestamp the applicant last was updated in the database              |

Example Response
```
{
  "created_at": "2014-10-23T07:17:35+00:00",
  "email": "davion@gaylord.info",
  "first_name": "Myles",
  "id": 9514,
  "last_name": "Herman",
  "over_21": null,
  "phone": "217-956-4883",
  "phone_type": "Blackberry",
  "reason": null,
  "region": "San Francisco Bay Area",
  "source": null,
  "updated_at": "2014-10-23T10:26:35+00:00",
  "workflow_state": "applied"
}
```

__Funnel__
Endpoint
`/funnels`

Available Methods
`GET`

Query Parameters
| Parameter  | Type   | Description                                                   |
|------------|--------|---------------------------------------------------------------|
| start_date | string | Start date of the applicant funnel analysis (ex.`2014-09-01`) |
| end_date   | string | End date of the applicant funnel analysis (ex.`2014-09-30`)   |

Example Response
```
{
  "2014-09-01-2014-09-07": {
    "applied": 3479,
    "hired": 577,
    "onboarding_completed": 1181,
    "onboarding_requested": 1699,
    "quiz_completed": 2430,
    "quiz_started": 2974
  },
  "2014-09-08-2014-09-14": {
    "applied": 3942,
    "hired": 665,
    "onboarding_completed": 1273,
    "onboarding_requested": 1865,
    "quiz_completed": 2706,
    "quiz_started": 3290
  },
  "2014-09-15-2014-09-21": {
    "applied": 4330,
    "hired": 762,
    "onboarding_completed": 1428,
    "onboarding_requested": 2132,
    "quiz_completed": 2855,
    "quiz_started": 3573
  },
  "2014-09-22-2014-09-28": {
    "applied": 4713,
    "hired": 774,
    "onboarding_completed": 1575,
    "onboarding_requested": 2323,
    "quiz_completed": 3170,
    "quiz_started": 3975
  },
  "2014-09-29-2014-09-30": {
    "applied": 711,
    "hired": 103,
    "onboarding_completed": 220,
    "onboarding_requested": 343,
    "quiz_completed": 460,
    "quiz_started": 585
  }
}
```