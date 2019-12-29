from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import Required

class RegisterForm(FlaskForm):
    name = StringField('Enter a username', validators = Required)
    password = StringField('Enter a password', validators = Required)
    submit = SubmitField('Register')

class LoginForm(FlaskForm):
    name = StringField('Enter a username', validators = Required)
    password = StringField('Enter a password', validators = Required)
    submit = SubmitField('Login')