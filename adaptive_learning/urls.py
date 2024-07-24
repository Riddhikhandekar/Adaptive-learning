# adaptive_learning/urls.py
from django.contrib import admin
from django.urls import include, path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from api.views import register
# from api.views import register, CourseListCreateAPIView, CourseDetailAPIView, LessonListCreateAPIView, LessonDetailAPIView, ContentRecommendationAPIView
# from . import views
from api import views  # Import your views from the appropriate module
# from api.views import login_view  # Import only the views we need



urlpatterns = [
    path('admin/', admin.site.urls),
    # path('api/login/', views.login_view, name='login'),
    # path('api/login/', views.login, name='login'),  # Ensure this matches your view function
    # path('api/login/', login_view),
    path('api/', include('api.urls')),
    # Include your app-specific URLs here if needed
    # path('api/courses/', CourseListCreateAPIView.as_view(), name='course-list-create'),
    # path('api/courses/<int:pk>/', CourseDetailAPIView.as_view(), name='course-detail'),
    # path('api/lessons/', LessonListCreateAPIView.as_view(), name='lesson-list-create'),
    # path('api/lessons/<int:pk>/', LessonDetailAPIView.as_view(), name='lesson-detail'),
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/register/', register, name='register'),
    # path('content/recommendations/', ContentRecommendationAPIView.as_view(), name='content-recommendations'),
]
