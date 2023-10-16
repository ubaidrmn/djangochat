from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from accounts.managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, null=False)
    email = models.CharField(max_length=255, null=False)
    full_name = models.CharField(max_length=255, null=False)
    bio = models.TextField(null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['username', 'email', 'full_name']
    EMAIL_FIELD = 'email'

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")
