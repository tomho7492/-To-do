from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('addNote', views.addNote, name='addNote'),
    path('remove', views.remove, name='remove'),
    path('markCompleted', views.markCompleted, name='markCompleted'),
    path('edit', views.edit, name='edit'),
path('logout', views.logout, name='logout'),
]