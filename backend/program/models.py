from django.db import models

# Create your models here.


class Program(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    img = models.CharField(max_length=700)
    alt = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return self.title
