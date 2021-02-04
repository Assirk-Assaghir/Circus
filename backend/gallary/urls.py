from django.urls import path
from gallary.views import GalleryInfoList,GalleryPhotoList, details

app_name = 'gallary'

urlpatterns = [
    path("", GalleryInfoList.as_view()),
    path("photo/", GalleryPhotoList.as_view()),
    path("details", details),

]
