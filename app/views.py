from flask import render_template, request, session, flash, redirect, url_for, Response
from app import app, models, db
from forms import AddressForm
from datetime import date
import sendgrid
import os
from sendgrid.helpers.mail import *
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
            q = models.Party.query.filter_by(address=x[0]).first()
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
            g = models.Guests.query.filter_by(id=x['gid']).first()
            if x['email']:
                g.email= x['email']
                sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
                from_email = Email("info@kirinandchris.com")
                subject = "%s %s - We Successfully Received Your RSVP" % (g.first_name, g.last_name)
                to_email = Email(g.email)
                content = Content("text/plain", "some text here")
                mail = Mail(from_email, subject, to_email, content)
                response = sg.client.mail.send.post(request_body=mail.get())
                print(response.status_code)
                print(response.body)
                print(response.headers)
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
    d0 = date.today()
    d1 = date(2016, 7, 31)
    days_until_rsvp = d1 - d0
    days_until_rsvp = days_until_rsvp.days
    party = models.Party.query.all()
    guests = models.Guests.query.all()

    bernardus = models.Party.query.filter_by(accommodations="bernardus_lodge").all()
    bernardus_guests = []
    for x in bernardus:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            bernardus_guests.append(y)
    bernardus_guests = len(bernardus_guests)

    blue_sky_lodge = models.Party.query.filter_by(accommodations="blue_sky_lodge").all()
    blue_sky_guests = []
    for x in blue_sky_lodge:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            blue_sky_guests.append(y)
    blue_sky_guests = len(blue_sky_guests)

    los_laureles = models.Party.query.filter_by(accommodations="los_laureles").all()
    los_laureles_guests = []
    for x in los_laureles:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            los_laureles_guests.append(y)
    los_laureles_guests = len(los_laureles_guests)

    carmel_valley_lodge = models.Party.query.filter_by(accommodations="carmel_valley_lodge").all()
    carmel_valley_lodge_guests = []
    for x in carmel_valley_lodge:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            carmel_valley_lodge_guests.append(y)
    carmel_valley_lodge_guests = len(carmel_valley_lodge_guests)

    carmel_valley_ranch = models.Party.query.filter_by(accommodations="carmel_valley_ranch").all()
    carmel_valley_ranch_guests = []
    for x in carmel_valley_ranch:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            carmel_valley_ranch_guests.append(y)
    carmel_valley_ranch_guests = len(carmel_valley_ranch_guests)

    quail_lodge = models.Party.query.filter_by(accommodations="quail_lodge").all()
    quail_lodge_guests = []
    for x in quail_lodge:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            quail_lodge_guests.append(y)
    quail_lodge_guests = len(quail_lodge_guests)

    hyatt_regency = models.Party.query.filter_by(accommodations="hyatt_regency").all()
    hyatt_regency_guests = []
    for x in hyatt_regency:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            hyatt_regency_guests.append(y)
    hyatt_regency_guests = len(hyatt_regency_guests)

    hilton_garden_inn = models.Party.query.filter_by(accommodations="hilton_garden_inn").all()
    hilton_garden_inn_guests = []
    for x in hilton_garden_inn:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            hilton_garden_inn_guests.append(y)
    hilton_garden_inn_guests = len(hilton_garden_inn_guests)

    airbnb_rental = models.Party.query.filter_by(accommodations="airbnb_rental").all()
    airbnb_rental_guests = []
    for x in airbnb_rental:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            airbnb_rental_guests.append(y)
    airbnb_rental_guests = len(airbnb_rental_guests)

    other = models.Party.query.filter_by(accommodations="other").all()
    other_guests = []
    for x in other:
        p_g = models.Guests.query.filter_by(party_id=x.id).all()
        for y in p_g:
            other_guests.append(y)
    other_guests = len(other_guests)

    total_attending = models.Guests.query.filter_by(attending=True).all()
    total_attending = len(total_attending)
    return render_template('rsvp-admin.html', 
                           party=party, 
                           guests=guests, 
                           total_attending=total_attending, 
                           days_until_rsvp=days_until_rsvp, 
                           bernardus=bernardus_guests, 
                           blue_sky_lodge=blue_sky_guests, 
                           los_laureles=los_laureles_guests, 
                           carmel_valley_lodge=carmel_valley_lodge_guests, 
                           carmel_valley_ranch=carmel_valley_ranch_guests, 
                           quail_lodge=quail_lodge_guests, 
                           hyatt_regency=hyatt_regency_guests, 
                           hilton_garden_inn=hilton_garden_inn_guests, 
                           airbnb_rental=airbnb_rental_guests, 
                           other=other_guests)

