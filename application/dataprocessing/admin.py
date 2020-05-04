from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
from .models import Domain, Items, Relation
from django.contrib.admin.models import LogEntry


admin.site.register(User, UserAdmin)
# admin.site.register(Membership)
admin.site.register(LogEntry)

admin.site.register(Domain)
admin.site.register(Items)
admin.site.register(Relation)