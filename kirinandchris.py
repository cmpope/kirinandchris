# from datetime import datetime
# from flask import Flask, render_template
# #from flask.ext.script import Manager
# #from flask.ext.bootstrap import Bootstrap
# #from flask.ext.moment import Moment

# app = Flask(__name__)

# #manager = Manager(app)
# #bootstrap = Bootstrap(app)
# #moment = Moment(app)


# @app.errorhandler(404)
# def page_not_found(e):
#     return render_template('404.html'), 404


# @app.errorhandler(500)
# def internal_server_error(e):
#     return render_template('500.html'), 500


# @app.route('/')
# def index():
#     return render_template('index.html',
#                            current_time=datetime.utcnow())


# @app.route('/about-us')
# def about_us():
#     return render_template('about-us.html')

# @app.route('/the-wedding-party')
# def the_wedding_party():
#     return render_template('the-wedding-party.html')

# @app.route('/the-big-day')
# def the_big_day():
#     return render_template('the-big-day.html')

# @app.route('/memories')
# def memories():
#     return render_template('memories.html')

# @app.route('/registry')
# def registry():
#     return render_template('registry.html')

# @app.route('/robots.txt')
# def robots():
#     return app.send_static_file('robots.txt')

# @app.route('/sitemap.xml')
# def sitemap():
#     return app.send_static_file('sitemap.xml')


# @app.route('/user/<name>')
# def user(name):
#     name = name.title()
#     return render_template('user.html', name=name)


# if __name__ == '__main__':
#     print 'lolz'
#     manager.run()
