from flask_wtf import Form
from wtforms import StringField, SubmitField, validators
from wtforms.validators import DataRequired

class AddressForm(Form):
  address = StringField('Enter The Address Your Invite Was Sent To', validators = [DataRequired()])
  submit = SubmitField('Submit')