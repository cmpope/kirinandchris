import os
import requests
from django.shortcuts import render
from django.http import HttpResponse


from .models import Greeting

# Create your views here.
#def index(request):
#    times = int(os.environ.get('TIMES',3))
#    return HttpResponse('Hello! ' * times)

#Old index
def index(request):
    # return HttpResponse('Hello from Python!')
   return render(request, 'index.html')


def db(request):

    greeting = Greeting()
    greeting.save()

    greetings = Greeting.objects.all()

    return render(request, 'db.html', {'greetings': greetings})

def how_we_met(request):
    return render(request, 'how-we-met.html')

def wedding_party(request):
    return render(request, 'wedding-party.html')

def the_big_day(request):
    return render(request, 'the-big-day.html')

def where_to_stay(request):
    return render(request, 'where-to-stay.html')

