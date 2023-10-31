from rest_framework import permissions


class UserPermissions(permissions.BasePermission):
    def has_permission(self, request, view):
        return True
                                                                              
    def has_object_permission(self, request, view, obj):
        return True
        # # Deny actions on objects if the user is not authenticated
        # if not request.user.is_authenticated():
        #     return False

        # if view.action == 'retrieve':
        #     return obj == request.user or request.user.is_admin
        # elif view.action in ['update', 'partial_update']:
        #     return obj == request.user or request.user.is_admin
        # elif view.action == 'destroy':
        #     return request.user.is_admin
        # else:
        #     return False