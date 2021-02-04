from rest_framework import generics
from gallary.serializers import GalleryInfoSerializer,GalleryPhotoSerializer
from gallary.models import GalleryInfo,GalleryPhoto

from rest_framework.decorators import api_view
from rest_framework.response import Response


# Create your views here.


class GalleryPhotoList(generics.ListCreateAPIView):
    queryset = GalleryPhoto.objects.all()
    serializer_class = GalleryPhotoSerializer

class GalleryInfoList(generics.ListCreateAPIView):
    queryset = GalleryInfo.objects.all()
    serializer_class = GalleryInfoSerializer

@api_view(['POST'])
def details(request):
    images = GalleryInfo.objects.get(id=request.data['id'])
    serializer = GalleryInfoSerializer(images, many=False)
    return Response(serializer.data)