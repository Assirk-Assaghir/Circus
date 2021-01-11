from django.db import models

# Create your models here.


class Images(models.Model):
    imgURL = models.CharField(max_length=750)

    def __str__(self):
        return self.imgURL
