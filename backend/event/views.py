from django.shortcuts import render
from rest_framework import generics

from event.models import Event
from event.serializers import EventSerializer

# Create your views here.


class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
