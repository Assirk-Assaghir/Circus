from django.shortcuts import render
from rest_framework import generics
from carouselImage.serializers import carouselImageSerializer
from carouselImage.models import carouselImage

# Create your views here.


class carouselImagelist(generics.ListCreateAPIView):
    queryset = carouselImage.objects.all()
    serializer_class = carouselImageSerializer
