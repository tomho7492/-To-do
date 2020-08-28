from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Todo(models.Model):
    User = models.ForeignKey(User, on_delete=models.CASCADE, default=None)
    date = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    content = models.TextField()
