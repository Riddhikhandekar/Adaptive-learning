# api/urls.py

from django.urls import path
from .views import login  # Import your login view function from views.py
from .views import signup
from .import views #newww
from .views import content_recommendation_view #newww
from .views import CourseListCreate, CourseRetrieveUpdateDestroy #newww
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import LoginView, content_recommendation_view,personalized_assessments_view, update_profile
from .views import my_django_view  # Import the view function
from .views import UserProfileUpdateView
from .views import user_login  # Import your view









urlpatterns = [
        # path('api/login/', login, name='login'),  # Define URL pattern for login
        # path('api/register/', register, name='register'),
        # path('profile/', views.user_profile_view, name='user_profile'),
        # path('api/recommendations/', content_recommendation_view, name='content_recommendations'),
        # path('login/', login_view, name='login'),
        # path('login/', user_login, name='login'),  # Map the URL to the view
        path('profile/update/', views.update_profile, name='update_profile'),
        # path('api/login/', TokenObtainPairView.as_view(), name='login'),
        # path('register/', RegisterView.as_view(), name='register'),
        path('hello/', my_django_view, name='hello_world'),
        # path('profile/', user_profile_view, name='user_profile'),
        path('profile/', UserProfileUpdateView.as_view(), name='profile-update'),
        path('courses/', CourseListCreate.as_view(), name='course-list-create'), #newww
        path('courses/<int:pk>/', CourseRetrieveUpdateDestroy.as_view(), name='course-detail'), #newww
        path('recommendations/', content_recommendation_view, name='content_recommendations'),
        path('assessments/', personalized_assessments_view, name='personalized_assessments'),
        path('update-profile/', update_profile, name='update_profile'),
        path('signup/', views.signup, name='signup'),
        path('login/', views.login, name='login'),
    


    # path('login/', login, name='login'),  # Define URL pattern for login
    # Add other URL patterns for your app's functionality
]
