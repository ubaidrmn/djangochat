from django.shortcuts import render
from rest_framework import viewsets
from accounts.models import User
from accounts.serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for viewing and editing accounts.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [IsAccountAdminOrReadOnly]
