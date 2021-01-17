from django.contrib import admin
from program.models import Program
from import_export.admin import ImportExportModelAdmin
# Register your models here.
# admin.site.register(Program)


@admin.register(Program)
class ProgramAdmin(ImportExportModelAdmin):
    pass
