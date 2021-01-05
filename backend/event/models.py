from django.db import models
import datetime

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=250)
    desc = models.TextField()
    image = models.CharField(max_length=1000)
    author = models.CharField(max_length=250)
    date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-title']
