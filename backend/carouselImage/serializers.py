from rest_framework import serializers
from carouselImage.models import carouselImage


class carouselImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = carouselImage
        fields = ("id", "alt", "imgURL")
