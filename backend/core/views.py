from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import views, status
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import *


class TokenView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class Message(APIView):
    def get(self, request, format=None):
        return Response({"message:" "Owrayytt..."})
