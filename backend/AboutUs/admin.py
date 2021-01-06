from django.contrib import admin
from AboutUs.models import AboutUs
from import_export.admin import ImportExportModelAdmin
# Register your models here.
# admin.site.register(AboutUs)


@admin.register(AboutUs)
class AboutUsAdmin(ImportExportModelAdmin):
    pass
