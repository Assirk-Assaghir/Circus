from django.urls import path
from AboutUs.views import AboutUsList

app_name = 'AboutUs'

urlpatterns = [
    path("", AboutUsList.as_view()),
]
