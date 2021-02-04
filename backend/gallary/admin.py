from django.contrib import admin
from gallary.models import GalleryInfo, GalleryPhoto
from import_export.admin import ImportExportModelAdmin
# Register your models here.
# admin.site.register(GalleryInfo)


@admin.register(GalleryInfo)
class GalleryInfoAdmin(ImportExportModelAdmin):
    pass

@admin.register(GalleryPhoto)
class GalleryInfoAdmin(ImportExportModelAdmin):
    pass
