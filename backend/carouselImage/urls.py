from django.urls import path, include
from carouselImage.views import carouselImagelist


urlpatterns = [
    path('', carouselImagelist.as_view())
]
