from django.shortcuts import render
from rest_framework import generics
from images.serializers import ImagesSerializer
from images.models import Images

# Create your views here.


class Imageslist(generics.ListCreateAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer
