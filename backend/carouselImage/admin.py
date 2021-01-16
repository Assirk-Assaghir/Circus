from django.contrib import admin
from carouselImage.models import carouselImage
from import_export.admin import ImportExportModelAdmin
# Register your models here.
# admin.site.register(AboutUs)


@admin.register(carouselImage)
class carouselImageAdmin(ImportExportModelAdmin):
    pass
