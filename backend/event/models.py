from django.db import models

# Create your models here.


class Event(models.Model):
    title = models.CharField(max_length=250)
    desc = models.CharField(max_length=5000)
    image = models.CharField(max_length=1000)

    class Meta:
        ordering = ['-title']
