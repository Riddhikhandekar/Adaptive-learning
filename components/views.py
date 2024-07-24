from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status, generics
from django.contrib.auth.models import User
from .models import UserProfile, Course, Assessment
from .serializers import UserProfileSerializer, CourseSerializer, AssessmentSerializer, UserSerializer
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from .forms import UserProfileForm
from django.contrib import messages
from rest_framework.permissions import IsAuthenticated
from .utils import generate_course_recommendations  # Replace with your recommendation logic
import json
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.hashers import make_password
# from .models import Course, Lesson, UserExtension



# API views for Course
class CourseListCreate(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

class CourseRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def content_recommendation_view(request):
#     try:
#         # Fetch the UserProfile for the current user
#         user_profile = UserProfile.objects.get(user=request.user)
        
#         subjects_of_interest = [user_profile.subjects_of_interest]  # Assuming it's a single value
#         preferred_learning_style = user_profile.preferred_learning_style
#         completed_lessons = user_profile.completed_lessons.all()

#         # Retrieve recommended courses based on user preferences
#         recommended_courses = Course.objects.filter(
#             subject__in=subjects_of_interest
#         ).exclude(
#             lesson__in=completed_lessons
#         )

#         serializer = CourseSerializer(recommended_courses, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)
    
#     except UserProfile.DoesNotExist:
#         return Response({'error': 'UserProfile not found'}, status=status.HTTP_404_NOT_FOUND)
#     except Exception as e:
#         return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# without authentication code
# @api_view(['GET'])
# def content_recommendation_view(request):
#     # Directly access the user profile without authentication checks
#     user_profile = UserProfile.objects.get(user=request.user)
#     subjects_of_interest = user_profile.subjects_of_interest.split(',')
#     preferred_learning_style = user_profile.preferred_learning_style
#     completed_lessons = user_profile.completed_lessons.all()

#     # Example: Retrieve courses based on user preferences and exclude completed lessons
#     recommended_courses = Course.objects.filter(
#         subject__in=subjects_of_interest
#     ).exclude(
#         lesson__in=completed_lessons
#     )

#     serializer = CourseSerializer(recommended_courses, many=True)
#     return Response(serializer.data)




@api_view(['GET'])
def content_recommendation_view(request):
    user_id = 1  # Replace with dynamic user ID if needed
    user_profile = get_object_or_404(UserProfile, user_id=user_id)

    subjects_of_interest = user_profile.subjects_of_interest.split(',')
    completed_lessons = user_profile.completed_lessons.all()

    recommended_courses = Course.objects.filter(
        subject__in=subjects_of_interest
    ).exclude(
        lesson__in=completed_lessons
    )

    serializer = CourseSerializer(recommended_courses, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)




# Login API view

import logging

logger = logging.getLogger(__name__)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'access': str(refresh.access_token),
                'refresh': str(refresh),
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# # User Profile View
# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def user_profile_view(request):
#     user_profile = get_object_or_404(UserProfile, user=request.user)
#     serializer = UserProfileSerializer(user_profile)
#     return Response(serializer.data)


from django.contrib.auth.forms import AuthenticationForm


def user_login(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('profile')  # Redirect to a success page or profile view
    else:
        form = AuthenticationForm()
    
    return render(request, 'registration/login.html', {'form': form})



from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic.edit import UpdateView



class UserProfileUpdateView(UpdateView):
    model = UserProfile
    form_class = UserProfileForm
    template_name = 'profile/update_profile.html'
    # success_url = '/profile/'  # Redirect URL after successful update

    def get_object(self):
        return self.request.user.profile

# Personalized Assessments View
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def personalized_assessments_view(request):
    assessments = Assessment.objects.all()
    serializer = AssessmentSerializer(assessments, many=True)
    return Response(serializer.data)

# Register View

# Register View
# @api_view(['POST'])
# def register(request):
#     if request.method == 'POST':
#         try:
#             body_unicode = request.body.decode('utf-8')
#             body = json.loads(body_unicode)
#             username = body.get('username')
#             email = body.get('email')
#             password = body.get('password')

#             user = User.objects.create_user(username=username, email=email, password=password)

#             if user:
#                 login(request, user)
#                 return Response({'message': 'User registered and logged in successfully'}, status=status.HTTP_201_CREATED)
#             else:
#                 return Response({'error': 'Failed to register user'}, status=status.HTTP_400_BAD_REQUEST)

#         except json.JSONDecodeError:
#             return Response({'error': 'Invalid JSON format in request body'}, status=status.HTTP_400_BAD_REQUEST)

#     else:
#         return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

######## @api_view(['POST'])
######## def register(request):
#     if request.method == 'POST':
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             refresh = RefreshToken.for_user(user)
#             return Response({
#                 'message': 'User registered and logged in successfully',
#                 'user_id': user.id,
#                 'refresh': str(refresh),
#                 'access': str(refresh.access_token),
#             }, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



######## class RegisterView(APIView):
#     def post(self, request):
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             user = serializer.save()
#             refresh = RefreshToken.for_user(user)
#             return Response({
#                 'user': serializer.data,
#                 'access': str(refresh.access_token),
#                 'refresh': str(refresh)
#             })
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    


from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return JsonResponse({'error': 'Please enter all required fields.'}, status=400)

        try:
            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'Username already exists.'}, status=400)

            hashed_password = make_password(password)
            user = User(username=username, password=hashed_password)
            user.save()
            return JsonResponse({'message': 'Registration successful!'})
        except Exception as e:
            return JsonResponse({'error': 'Registration failed. Please try again.', 'details': str(e)}, status=500)

from django.contrib.auth.hashers import make_password, check_password

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return JsonResponse({'error': 'Please enter all required fields.'}, status=400)

        try:
            user = User.objects.get(username=username)
            if check_password(password, user.password):
                return JsonResponse({'message': 'Login successful!'})
            else:
                return JsonResponse({'error': 'Login failed. Incorrect password.'}, status=401)
        except User.DoesNotExist:
            return JsonResponse({'error': 'Login failed. User not found.'}, status=401)
        except Exception as e:
            return JsonResponse({'error': 'Login failed. Please try again.', 'details': str(e)}, status=500)





logger = logging.getLogger(__name__)

from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes

# User Profile Update View
# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# @login_required
# @login_required
# def update_profile(request):
#     profile = get_object_or_404(UserProfile, user=request.user)

#     if request.method == 'POST':
#         form = UserProfileForm(request.POST, request.FILES, instance=profile)
#         if form.is_valid():
#             form.save()
#             # return redirect('profile')
#     # else:
#     #     form = UserProfileForm(instance=profile)
#             next_url = request.GET.get('next', 'profile')  # Default to 'profile' if no next parameter
#             return redirect(next_url)
#     else:
#         form = UserProfileForm(instance=request.user.profile)

#     return render(request, 'profile/update_profile.html', {'form': form})






# @login_required(login_url='/login/')  # Redirect to login if not authenticated
# def update_profile(request):
#     # Check if user is authenticated
#     if request.user.is_authenticated:
#         if request.method == 'POST':
#             form = UserProfileForm(request.POST, request.FILES, instance=request.user.profile)
#             if form.is_valid():
#                 form.save()
#                 messages.success(request, 'Profile updated successfully!')
#                 return redirect('profile')  # Redirect to a success page or profile view
#         else:
#             form = UserProfileForm(instance=request.user.profile)
#     else:
#         # For admin or development purposes, allow access without login
#         form = UserProfileForm()
#         messages.info(request, 'You are viewing this page as an admin or development user.')
    
#     return render(request, 'profile/update_profile.html', {'form': form})


@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def update_profile(request):
    user_profile = get_object_or_404(UserProfile, user=request.user)
    serializer = UserProfileSerializer(user_profile, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





# def authenticate(request=None, **credentials):
#     """
#     If the given credentials are valid, return a User object.
#     """
#     for backend in get_backends():
#         try:
#             user = backend.authenticate(request, **credentials)
#         except PermissionDenied:
#             continue
#         if user is not None:
#             user.backend = backend.__module__
#             return user
#     return None


def dev_access_view(request):
    if request.method == 'POST':
        # Your logic here
        return HttpResponse('Data saved')
    return render(request, 'profile/update_profile.html')





from django.http import HttpResponse

def my_django_view(request):
    return HttpResponse('Hello, world!')

