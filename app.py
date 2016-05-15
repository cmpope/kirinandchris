from flask import Flask, render_template, request, session, flash, redirect, url_for
from flask.ext.sqlalchemy import SQLAlchemy
from forms import AddressForm
import os
import requests


app = Flask(__name__)
app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

import models


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/rsvp', methods=['GET', 'POST'])
def rsvp():
    addressForm = AddressForm()
    address = None
    postal = None
    error = None
    if addressForm.validate_on_submit():
        address = addressForm.address.data
        #session['address'] = addressForm.address.data
        q = models.Party.query.filter_by(address=address).first()
        print q
        addressForm.address.data = ''
        if q:
            postal = q.postal
            print postal
            #return redirect(url_for('rsvp'))
        else:
            error = "Sorry, we did not invite that address"
    return render_template('rsvp.html', addressForm=addressForm, addres=address, postal=postal, error=error)


@app.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


if __name__ == '__main__':
    app.run()