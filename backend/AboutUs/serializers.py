from rest_framework import serializers
from AboutUs.models import AboutUs


class AboutUsSerializer(serializers.ModelSerializer):

    class Meta:
        model = AboutUs
        fields = ("title", "description", "img")
