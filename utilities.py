from app import app, db, models
import csv 

with open('app/static/party.csv', 'rb') as p:
    reader = csv.reader(p)
    reader.next()
    for row in reader:
        pq = models.Party.query.filter_by(id=row[0]).all()
        if pq:
          print "This record: Party: %s %s %s, already exisist" % (row[1], row[2], row[3])
        else:
          p_id = row[1]
          address = row[2]
          city = row[3]
          state = row[4]
          postal = row[5]
          new_p = models.Party(p_id, address, city, state, postal)
          db.session.add(new_p)
          db.session.commit()
          p_update = models.Party.query.filter_by(id=new_p.id).first()
          print "Added %s %s %s to the database" % (p_update.id, p_update.address, p_update.city)

with open('app/static/guests.csv', 'rb') as g:
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
          new_g = models.Guests(p_id, first_name, last_name)
          db.session.add(new_g)
          db.session.commit()
          g_update = models.Guests.query.filter_by(id=new_g.id).first()
          print "Added %s %s %s to the database" % (g_update.id, g_update.first_name, g_update.last_name)
