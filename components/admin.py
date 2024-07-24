from django.contrib import admin
# from api.models import Course, Lesson, SupplementaryMaterial, UserProfile

# @admin.register(Course)
# class CourseAdmin(admin.ModelAdmin):
#     list_display = ('title', 'level', 'learning_style', 'motivation_level', 'price')
#     search_fields = ('title', 'tags')

# @admin.register(Lesson)
# class LessonAdmin(admin.ModelAdmin):
#     list_display = ('title', 'course', 'sequence_number', 'estimated_duration_minutes', 'video_url', 'created_at')
#     search_fields = ('title', 'tags')

# @admin.register(SupplementaryMaterial)
# class SupplementaryMaterialAdmin(admin.ModelAdmin):
#     list_display = ('title', 'file')
#     search_fields = ('title',)

# Comment out or remove these lines to prevent the UserProfile model from appearing in the admin interface
# from .models import UserProfile

# @admin.register(UserProfile)
# class UserProfileAdmin(admin.ModelAdmin):
#     list_display = ('user', 'name', 'email', 'preferred_learning_style')
#     search_fields = ('user__username', 'name', 'email')
