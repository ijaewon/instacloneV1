from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers

class Feed(APIView):

    def get(self, request, format=None):

        user = request.user

        following_users = user.following.all()

        image_list = []

        for following_user in following_users:

            user_images = following_user.images.all()[:2]

            for image in user_images:

                image_list.append(image)

        sorted_list = sorted(image_list, key=lambda image : image.created_at, reverse=True)

        print(sorted_list)

        serializer = serializers.ImageSerializer(sorted_list, many=True)

        return Response(data=serializer.data ,status=status.HTTP_201_CREATED)

class LikeImage(APIView):

    def get(self, request, image_id, format=None):

        print(image_id)

        return Response(status=status.HTTP_201_CREATED)