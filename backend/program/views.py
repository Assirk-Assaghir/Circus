from rest_framework import generics
from program.serializers import ProgramSerializer
from program.models import Program
# Create your views here.


class ProgramList(generics.ListCreateAPIView):
    queryset = Program.objects.all()
    serializer_class = ProgramSerializer
