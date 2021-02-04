from rest_framework import serializers
from gallary.models import GalleryInfo,GalleryPhoto


class GalleryPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryPhoto
        fields = ('id',"title", "image","imagesId")

class GalleryInfoSerializer(serializers.ModelSerializer):
    images = GalleryPhotoSerializer(many=True, read_only=True)
    class Meta:
        model = GalleryInfo
        fields = ('id', "title", "description",'image', "images" )
