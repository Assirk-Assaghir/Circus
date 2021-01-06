from django.shortcuts import render
from rest_framework import generics

from event.models import Event
from event.serializers import EventSerializer

from rest_framework.decorators import api_view  
from rest_framework.response import Response

# Create your views here.


class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


@api_view(['POST'])
def EventDetails(request):
    event = Event.objects.get(id=request.data['id']) 
    serializer = EventSerializer(event,many=False)
    return Response(serializer.data)
