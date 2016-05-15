from flask import Flask, render_template, request, session, flash, redirect, url_for
from flask.ext.sqlalchemy import SQLAlchemy
from forms import AddressForm
import os
import requests
from fuzzywuzzy import process


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
    choices = models.Party.query.all()
    all_addresses = []
    for x in choices:
        all_addresses.append(x.address)
    print all_addresses
    addressForm = AddressForm()
    address = None
    postal = None
    check = None
    error = None
    full_name = None
    g = []
    q = None
    if addressForm.validate_on_submit():
        address = addressForm.address.data
        #session['address'] = addressForm.address.data
        x = process.extractOne(address, all_addresses)
        print x
        if x[1] == 100:
            q = models.Party.query.filter_by(address=address).first()
            g = models.Guests.query.filter_by(party_id=q.id).all()
            addressForm.address.data = ''
        elif 85 < x[1] < 100:
            check = 'Did you mean this address:' + ' ' + x[0]
            #return redirect(url_for('rsvp'))
        else:
            error = "Sorry, we don't recognize that address, please enter your address as it appears on your invite"
    return render_template('rsvp.html', addressForm=addressForm, addres=address, postal=postal, full_name=full_name, g=g, q=q, check=check, error=error)


@app.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


if __name__ == '__main__':
    app.run()