from django.db import models

# Create your models here.

class GalleryInfo(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.CharField(max_length=500)
    def __str__(self):
        return self.title

class GalleryPhoto(models.Model):
    title = models.CharField(max_length=200, blank=True, default='')
    image = models.CharField(max_length=700)
    imagesId = models.ForeignKey(GalleryInfo,on_delete=models.CASCADE, related_name='images')

    def __str__(self):
        return self.title