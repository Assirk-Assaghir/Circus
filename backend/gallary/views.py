from rest_framework import generics
from gallary.serializers import GalleryInfoSerializer
from gallary.models import GalleryInfo
# Create your views here.


class GalleryInfoList(generics.ListCreateAPIView):
    queryset = GalleryInfo.objects.all()
    serializer_class = GalleryInfoSerializer