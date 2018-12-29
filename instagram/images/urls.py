from django.urls import path, re_path
from . import views

app_name = "images"

urlpatterns = [

    path("all",view=views.ListAllImages.as_view(),name='all_images'),
    path("comments",view=views.ListAllComment.as_view(),name='all_comments'),
    path("likes",view=views.ListAllLikes.as_view(),name='all_likes'),
]
