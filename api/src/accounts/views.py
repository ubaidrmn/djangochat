from django.shortcuts import render
from rest_framework import viewsets
from accounts.models import User
from accounts.serializers import UserSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from accounts.permissions import UserPermissions


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = [UserPermissions]

    # @action(
    #     detail=False,
    #     methods=['post'],
    #     url_path="register-user",
    #     url_name="register-user"
    # )
    # def register_user(self, request):
    #     print("HAHA")
    #     serializer = self.serializer_class(data=request.data)
    #     if serializer.is_valid():
    #         # serializer.save()
    #         print("HAHA")
    #         # user = User.objects.get(serializer.validated_data['id'])
    #         # user.set_password(serializer.validated_data['password'])
    #         # user.save()
    #         return Response(serializer.data, status=status.HTTP_200_OK)
    #     else:
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
