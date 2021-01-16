from django.db import models

# Create your models here.


class carouselImage(models.Model):
    alt = models.CharField(max_length=200)
    imgURL = models.CharField(max_length=750)

    def __str__(self):
        return self.alt
