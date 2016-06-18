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

    def __init__(self, id, address, city, state, postal):
        self.id = id
        self.address = address
        self.city = city
        self.state = state
        self.postal = postal

    def __repr__(self):
        return '<id {}>'.format(self.id)



class Guests(db.Model):
    __tablename__ = 'guests'

    id = db.Column(db.Integer, primary_key=True)
    party_id = db.Column(db.Integer, db.ForeignKey('party.id'))
    first_name = db.Column(db.String(120))
    last_name = db.Column(db.String(120))
    email = db.Column(db.String(120))
    attending = db.Column(db.Boolean)
    dietary_restrictions = db.Column(db.Text)



    def __init__(self, party_id, first_name, last_name):
        self.party_id = party_id
        self.first_name = first_name
        self.last_name = last_name

    def __repr__(self):
        return '<id {}>'.format(self.id)


