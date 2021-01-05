from django.urls import path
from gallary.views import GalleryInfoList

urlpatterns = [
    path("", GalleryInfoList.as_view()),
]