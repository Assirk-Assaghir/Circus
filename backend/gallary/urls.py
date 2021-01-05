from django.urls import path
from gallary.views import GalleryInfoList

app_name = 'gallary'

urlpatterns = [
    path("", GalleryInfoList.as_view()),
]
