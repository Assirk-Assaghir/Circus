from rest_framework import generics
from AboutUs.serializers import AboutUsSerializer
from AboutUs.models import AboutUs
# Create your views here.


class AboutUsList(generics.ListCreateAPIView):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer
