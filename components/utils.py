# api/utils.py

from .models import LearningPath, Course

def generate_learning_paths(user_profile):
    interests = user_profile.interests.split(',')
    learning_paths = []
    for interest in interests:
        courses = Course.objects.filter(subject=interest)
        for course in courses:
            learning_paths.append(LearningPath(user_profile=user_profile, course=course))
    LearningPath.objects.bulk_create(learning_paths)

def generate_course_recommendations(user_profile):
    interests = user_profile.subjects_of_interest.split(',')
    learning_style = user_profile.preferred_learning_style

    # Example logic: Fetch courses based on user interests and learning style
    recommendations = Course.objects.filter(subject__in=interests, learning_style=learning_style)

    return list(recommendations.values())