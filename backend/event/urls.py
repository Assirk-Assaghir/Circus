from django.urls import path, include
from event.views import EventList

app_name = 'event'

urlpatterns = [
    path('', EventList.as_view())
]
