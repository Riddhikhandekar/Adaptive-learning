# serializers.py
from rest_framework import serializers
# from .models import UserProfile, Course, Lesson

# class UserProfileSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserProfile
#         fields = '__all__'

# class CourseSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Course
#         fields = '__all__'

# class LessonSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Lesson
#         fields = '__all__'

# # new

from django.contrib.auth.models import User
# from rest_framework import serializers

# User Serializer
# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ( 'username', 'email','password')
#         extra_kwargs = {'password': {'write_only': True}}
# # # Register Serializer
# # class RegisterSerializer(serializers.ModelSerializer):
# #     class Meta:
# #         model = User
# #         fields = ( 'username', 'email', 'password')
# #         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(
#             # validated_data['username'], validated_data['email'], validated_data['password'
#             username=validated_data['username'],
#             email=validated_data['email'],
#             password=validated_data['password']
#             )
#         return user
def create(self, validated_data):
        user = User(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        user.save()
        return user




from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile
# from .models import Course
# from .models import  Lesson

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        # fields = '__all__'
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        # model = Course
        fields = '__all__'

class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        # model = Lesson
        fields = '__all__'

# User Serializer using the default Django User model
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password', 'date_joined')
        extra_kwargs = {'password': {'write_only': True}}

# class RegisterSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('username', 'email', 'password')
#         extra_kwargs = {'password': {'write_only': True}}

    # def create(self, validated_data):
    #     user = User.objects.create_user(
    #         username=validated_data['username'],
    #         email=validated_data['email'],
    #         password=validated_data['password']
    #     )
    #     return user

# new 
# class LoginSerializer(serializers.Serializer):
#     username = serializers.CharField()
#     password = serializers.CharField()


from .models import Assessment

class AssessmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assessment
        fields = '__all__'