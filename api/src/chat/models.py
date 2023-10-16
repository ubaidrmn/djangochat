from django.db import models
from accounts.models import User


class ActiveConnection(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    channel_name = models.TextField()

    class Meta:
        verbose_name = ("ActiveConnection")
        verbose_name_plural = ("ActiveConnections")
