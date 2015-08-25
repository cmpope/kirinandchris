from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

import hello.views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'gettingstarted.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$', hello.views.index, name='index'),
    url(r'^db', hello.views.db, name='db'),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^how-we-met', hello.views.how_we_met, name='how-we-met'),
    url(r'^wedding-party', hello.views.wedding_party, name='wedding-party'),
    url(r'^the-big-day', hello.views.the_big_day, name='the-big-day'),
    url(r'^where-to-stay', hello.views.where_to_stay, name='where-to-stay')

)
