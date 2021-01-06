from django.contrib import admin
from event.models import Event
from import_export.admin import ImportExportModelAdmin
# Register your models here.

# admin.site.register(Event)


@admin.register(Event)
class EventAdmin(ImportExportModelAdmin):
    pass
