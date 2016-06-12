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

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about-us')
def about_us():
    return render_template('about-us.html')

@app.route('/the-wedding-party')
def the_wedding_party():
    return render_template('the-wedding-party.html')

@app.route('/the-big-day')
def the_big_day():
    return render_template('the-big-day.html')

@app.route('/memories')
def memories():
    return render_template('memories.html')

@app.route('/registry')
def registry():
    return render_template('registry.html')

@app.route('/robots.txt')
def robots():
    return app.send_static_file('robots.txt')

@app.route('/sitemap.xml')
def sitemap():
    return app.send_static_file('sitemap.xml')


@app.route('/rsvp', methods=['GET', 'POST'])
def rsvp(**kwargs):
    choices = models.Party.query.all()
    all_addresses = []
    for x in choices:
        all_addresses.append(x.address)
    addressForm = AddressForm()
    address = None
    postal = None
    check = False
    error = False
    full_name = None
    name = None
    g = []     
    q = None
    x = None
    if kwargs:
        address = kwargs['address']
        print 'This is the address', address
        a = str(address)
        print type(a)
        print a
        q = models.Party.query.filter_by(address=a).first()
        g = models.Guests.query.filter_by(party_id=q.id).all()
        addressForm.address.data = ''
    elif addressForm.validate_on_submit():
        address = addressForm.address.data
        x = process.extractOne(address, all_addresses)
        if x[1] == 100:
            q = models.Party.query.filter_by(address=address).first()
            g = models.Guests.query.filter_by(party_id=q.id).all()
            addressForm.address.data = ''
        elif 85 < x[1] < 100:
            check = True
        else:
            error = True
    return render_template('rsvp.html', addressForm=addressForm, addres=address, postal=postal, full_name=full_name, g=g, q=q, x=x, check=check, error=error)


@app.route('/api/confirm-address', methods=['GET', 'POST'])
def confirm_address_api():
    # rsvp(address=address)
    if request == "POST":
        r = request
        print r
    return rsvp()

@app.route('/rsvp/update', methods=['POST'])
def rsvp_update():
    if request.method == "POST":
        r = request.get_json()
        for x in r:
            g = models.Guests.query.filter_by(id=x['gid']).first()
            g.attending = x['attending']
            print g.attending
            g.dietary_restrictions = x['dietary_restrictions']
            print g.dietary_restrictions
            db.session.commit()
    else:
        print "i suck"
    return index()

@app.route('/rsvp/admin')
def rsvp_adim():
    party = models.Party.query.all()
    guests = models.Guests.query.all()
    return render_template('rsvp-admin.html', party=party, guests=guests)


@app.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)


if __name__ == '__main__':
    app.run()