from django.urls import path, include
from images.views import Imageslist


urlpatterns = [
    path('', Imageslist.as_view())
]
