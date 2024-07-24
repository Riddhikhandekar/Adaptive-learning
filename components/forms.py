# # api/forms.py

from django import forms
from django.contrib.auth.models import User #new
from .models import UserProfile

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        # fields = '__all__'
        fields = [
            'name', 'email', 'date_of_birth', 'gender', 'phone_number', 
            'profile_picture', 'bio', 'preferred_learning_style', 
            'secondary_learning_style', 'subjects_of_interest', 'motivation_level',
            'preferred_content_format', 'study_schedule', 'previous_education_level',
            'preferred_assessment_types', 'interests', 'progress', 'current_lesson', 
            'completed_lessons', 'quiz_scores'
        ]
