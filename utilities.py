from app import db, models
import csv 

with open('static/test_party.csv', 'rb') as p:
    reader = csv.reader(p)
    reader.next()
    for row in reader:
        pq = models.Party.query.filter_by(id=row[0]).all()
        if pq:
          print "This record: Party: %s %s %s, already exisist" % (row[1], row[2], row[3])
        else:
          p_id = row[0]
          address = row[1]
          city = row[2]
          state = row[3]
          postal = row[4]
          new_p = models.Party(address, city, state, postal)
          db.session.add(new_p)
          db.session.commit()
          p_update = models.Party.query.filter_by(id=new_p.id).first()
          print "Added %s %s %s to the database" % (p_update.id, p_update.address, p_update.city)

with open('static/test_guest.csv', 'rb') as g:
    reader = csv.reader(g)
    reader.next()
    for row in reader:
        gq = models.Guests.query.filter_by(id=row[0]).all()
        if gq:
          print "This record: Party: %s %s %s, already exisist" % (row[1], row[2], row[3])
        else:
          p_id = row[1]
          first_name = row[2]
          last_name = row[3]
          email = row[4]
          new_g = models.Guests(p_id, first_name, last_name, email)
          db.session.add(new_g)
          db.session.commit()
          g_update = models.Guests.query.filter_by(id=new_g.id).first()
          print "Added %s %s %s to the database" % (g_update.id, g_update.first_name, g_update.last_name)
