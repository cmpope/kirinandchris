from app import db

class Party(db.Model):
    __tablename__ = 'party'

    id = db.Column(db.Integer, primary_key=True)
    guests = db.relationship('Guests', backref='party',
                                lazy='dynamic')
    address = db.Column(db.String(228))
    city = db.Column(db.String(228))
    state = db.Column(db.String(50))
    postal = db.Column(db.String(50))
    accommodations = db.Column(db.String(228))

    def __init__(self, address, city, state, postal, accommodations):
        self.address = address
        self.city = city
        self.state = state
        self.postal = postal
        self.accommodations = accommodations

    def __repr__(self):
        return '<id {}>'.format(self.id)



class Guests(db.Model):
    __tablename__ = 'guests'

    id = db.Column(db.Integer, primary_key=True)
    party_id = db.Column(db.Integer, db.ForeignKey('party.id'))
    first_name = db.Column(db.String(120))
    last_name = db.Column(db.String(120))
    email = db.Column(db.String(120), unique=True)
    attending = db.Column(db.Boolean)
    dietary_restrictions = db.Column(db.Text)



    def __init__(self, party_id, first_name, last_name, email, attending, dietary_restrictions):
        self.party_ID = party_ID
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.attending = attending
        self.dietary_restrictions = dietary_restrictions

    def __repr__(self):
        return '<id {}>'.format(self.id)


