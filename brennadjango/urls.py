from django.urls import path
from . import views


urlpatterns = [
    path('commands/fetch', views.FetchCommand),
    path('commands/fetch_all', views.FetchAllCommands),
    path('commands/create', views.CreateCommand),
    path('commands/reorder', views.ReorderCommands),
    path('sets/fetch', views.FetchSet),
    path('sets/fetch_all', views.FetchAllSets),
    path('sets/create', views.CreateSet),
    path('sets/modify', views.ModifySet),
    path('sets/execute', views.ExecuteSet),
]