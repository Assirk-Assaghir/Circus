from django.db import models

# Create your models here.
class GalleryInfo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.CharField(max_length=700)

    def __str__(self):
        return self.title