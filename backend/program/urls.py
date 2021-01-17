from django.urls import path
from program.views import ProgramList

app_name = 'Program'

urlpatterns = [
    path("", ProgramList.as_view()),
]
