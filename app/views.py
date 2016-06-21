from flask import render_template, request, session, flash, redirect, url_for, Response
from app import app, models, db
from forms import AddressForm
import os
from fuzzywuzzy import process


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
    # if addressForm.validate_on_submit():
    if request.method == "POST":
        # address = addressForm.address.data
        address = request.form['address']
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


@app.route('/rsvp/confirmation')
def rsvp_confirmation():
    return render_template('rsvp-confirmation.html')

@app.route('/api/confirm-address', methods=['POST'])
def confirm_address_api():
    if request.method == "POST":
        address = request.data
        return rsvp(address)

@app.route('/rsvp/update/guest', methods=['POST'])
def rsvp_update_guest():
    if request.method == "POST":
        r = request.get_json()
        for x in r:
            print x
            g = models.Guests.query.filter_by(id=x['gid']).first()
            if x['email']:
                print g.email
                g.email= x['email']
            g.attending = x['attending']
            g.dietary_restrictions = x['dietary_restrictions']
            db.session.add(g)
            db.session.commit()
    return redirect('/rsvp')

@app.route('/rsvp/update/party', methods=['POST'])
def rsvp_update_party():
    if request.method == "POST":
        r = request.get_json()
        p = models.Party.query.filter_by(id=r['pid']).first()
        p.accommodations = r['accommodations']
        db.session.add(p)
        db.session.commit()
    return redirect('/rsvp')

@app.route('/rsvp/admin')
def rsvp_admin():
    party = models.Party.query.all()
    guests = models.Guests.query.all()
    total_attending = models.Guests.query.filter_by(attending=True).all()
    total_attending = len(total_attending)
    return render_template('rsvp-admin.html', party=party, guests=guests, total_attending=total_attending)

