from django.urls import path
from AboutUs.views import AboutUsList

urlpatterns = [
    path("", AboutUsList.as_view()),
]
