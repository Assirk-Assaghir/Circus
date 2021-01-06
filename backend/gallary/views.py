from rest_framework import generics
from gallary.serializers import GalleryInfoSerializer,GalleryPhotoSerializer
from gallary.models import GalleryInfo,GalleryPhoto
# Create your views here.


class GalleryPhotoList(generics.ListCreateAPIView):
    queryset = GalleryPhoto.objects.all()
    serializer_class = GalleryPhotoSerializer

class GalleryInfoList(generics.ListCreateAPIView):
    queryset = GalleryInfo.objects.all()
    serializer_class = GalleryInfoSerializer