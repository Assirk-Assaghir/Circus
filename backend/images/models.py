from django.db import models

# Create your models here.


class Images(models.Model):
    imgURL = models.TextField(max_length=600)

    def __str__(self):
        return self.imgURL
