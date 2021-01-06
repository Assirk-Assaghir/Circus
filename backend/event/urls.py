from django.urls import path, include
from event.views import EventList, EventDetails

app_name = 'event'

urlpatterns = [
    path('', EventList.as_view()),
    path('details', EventDetails)
]
