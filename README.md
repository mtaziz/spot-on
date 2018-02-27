# This is the project for Software Engineer

## How to set up the development environment

### Setting up a virtualenv with python3

If you don't have **Python 3** installed, you will need to do it!

See reference [here](http://www.marinamele.com/2014/07/install-python3-on-mac-os-x-and-use-virtualenv-and-virtualenvwrapper.html) for setting up **Python3** and **virtualenv**.

Type
```
which python3
```
to see the path to your python3 environment

Then execute the following commands to create a new virtualenv
```
mkvirtualenv spot-on --python=[path-to-python3]
```

**NOTE**: From now on, every time you start working on your project, type
```
workon spot-on
```
to start the virtualenv.

### Install Django
Type
```
pip install Django==2.0.2
```
to install Django on your virtualenv.

In your project root folder, type:
```
python manage.py runserver
```
to run the project on your local machine. The server should be served at http://127.0.0.1:8000/.
