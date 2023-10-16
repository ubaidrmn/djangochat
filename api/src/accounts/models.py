from django.db import models
from django.contrib.auth.models import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from accounts.managers import UserManager


class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=255, null=False, unique=True)
    email = models.CharField(max_length=255, null=False)
    fullname = models.CharField(max_length=255, null=False)
    bio = models.TextField(null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'fullname']
    EMAIL_FIELD = 'email'

    class Meta:
        verbose_name = ("User")
        verbose_name_plural = ("Users")
