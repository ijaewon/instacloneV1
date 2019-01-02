from django.urls import path, re_path
from . import views

app_name = "Notifications"

urlpatterns = [

    path("",view=views.Notification.as_view(),name='notifications'),

]
