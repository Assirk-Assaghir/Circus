from rest_framework import serializers
from gallary.models import GalleryInfo


class GalleryInfoSerializer(serializers.ModelSerializer):

    class Meta:
        model = GalleryInfo
        fields = ("title", "description", "image")