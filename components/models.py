from django.db import models
# from django.db.models.signals import post_save
# from django.dispatch import receiver
from django.contrib.auth.models import User
from datetime import timedelta, date   #newww
from django.utils import timezone  #newww
# # from api.models import UserProfile
# # from .quiz import Quiz
# from .supplementary_material import SupplementaryMaterial
# # class AssessmentType(models.Model):
# #     name = models.CharField(max_length=100)
#     # Add other fields as needed

#     # def __str__(self):
#     #     return self.name

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=False)
    date_of_birth = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=10, choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], null=True, blank=True)
    phone_number = models.CharField(max_length=15, null=True, blank=True)
    # date_joined = models.DateTimeField(auto_now_add=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    bio = models.TextField(null=True, blank=True)
    preferred_learning_style = models.CharField(
        max_length=50,
        choices=[
            ('visual', 'Visual'),
            ('auditory', 'Auditory'),
            ('kinesthetic', 'Kinesthetic'),
            ('reading/writing', 'Reading/Writing')
        ],
        default='visual'  # Provide a default value
    )
    secondary_learning_style = models.CharField(
        max_length=50,
        choices=[
            ('visual', 'Visual'),
            ('auditory', 'Auditory'),
            ('kinesthetic', 'Kinesthetic'),
            ('reading/writing', 'Reading/Writing')
        ],
        null=True,
        blank=True
    )
    SUBJECT_CHOICES = [
        ('mathematics', 'Mathematics'),
        ('science', 'Science'),
        ('history', 'History'),
        ('literature', 'Literature'),
        ('programming', 'Programming'),
        ('languages', 'Languages'),
        ('arts', 'Arts'),
        ('music', 'Music'),
        ('sports', 'Sports'),
        ('other', 'Other'),
    ]
    subjects_of_interest = models.CharField(
        max_length=50,
        choices=SUBJECT_CHOICES,
        null=True,
        blank=True
    )

    motivation_level = models.IntegerField(
        null=True, blank=True,
        choices=[
            (1, '1 - Very Low'),
            (2, '2'),
            (3, '3'),
            (4, '4'),
            (5, '5 - Neutral'),
            (6, '6'),
            (7, '7'),
            (8, '8'),
            (9, '9'),
            (10, '10 - Very High'),
        ]
    )
    preferred_content_format = models.CharField(
        max_length=50,
        choices=[
            ('videos', 'Videos'),
            ('text', 'Text'),
            ('interactive', 'Interactive Content')
        ],
        null=True,
        blank=True
    )
    study_schedule = models.CharField(
     max_length=50,
        choices = [
            ('morning', 'Morning'),
            ('afternoon', 'Afternoon'),
            ('evening', 'Evening'),
            ('night', 'Night'),
        ],
        null=True,
        blank=True
    )
    previous_education_level = models.CharField(
    max_length=50,
    choices=[
        ('high_school', 'High School'),
        ('undergraduate', 'Undergraduate'),
        ('graduate', 'Graduate'),
        ('post_graduate', 'Post-Graduate'),
        ('other', 'Other'),
    ],
    null=True,
    blank=True
    )
    # preferred_assessment_types = models.ManyToManyField(AssessmentType, blank=True)
    preferred_assessment_types = models.CharField(
    max_length=50,
    choices=[
        ('quiz','Quiz'),
         ('assignment','Assignment'),
    ],
    null=True,
    blank=True
    )

    interests = models.TextField(blank=True)  # Comma-separated list of interests
    progress = models.IntegerField(default=0)  # Progress as a percentage
    current_lesson = models.ForeignKey('Lesson', on_delete=models.SET_NULL, null=True, blank=True)
    completed_lessons = models.ManyToManyField('Lesson', related_name='completed_by', blank=True)
    quiz_scores = models.JSONField(default=dict)

    class Meta:
        db_table = 'api_userprofileee'


def __str__(self):
        return self.user.username 
# + ' Profile'


# # new
# @receiver(post_save, sender=User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         UserProfile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     instance.userprofile.save()
# # class StudySchedule(models.Model):
# #     DAY_CHOICES = [
# #         ('monday', 'Monday'),
# #         ('tuesday', 'Tuesday'),
# #         ('wednesday', 'Wednesday'),
# #         ('thursday', 'Thursday'),
# #         ('friday', 'Friday'),
# #         ('saturday', 'Saturday'),
# #         ('sunday', 'Sunday'),
# #     ]

# #     TIME_CHOICES = [
# #         ('morning', 'Morning'),
# #         ('afternoon', 'Afternoon'),
# #         ('evening', 'Evening'),
# #         ('night', 'Night'),
# #      ]

# #     day = models.CharField(max_length=10, choices=DAY_CHOICES)
# #     time = models.CharField(max_length=10, choices=TIME_CHOICES)
# #     study_schedule = models.ForeignKey(StudySchedule, on_delete=models.CASCADE, null=True, blank=True)



# # class Quiz(models.Model):
# #     title = models.CharField(max_length=100)
# class SupplementaryMaterial(models.Model):
#     name = models.CharField(max_length=100)
# # class Tag(models.Model):
# #     name = models.CharField(max_length=50)




#newww
from django.db import models

class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    subject = models.CharField(max_length=255)
    level = models.CharField(max_length=20, choices=[
        ('beginner', 'Beginner'),
        ('intermediate', 'Intermediate'),
        ('advanced', 'Advanced'),
    ])
    tags = models.CharField(max_length=255, blank=True)  # Allow multiple tags separated by commas
    price = models.DecimalField(max_digits=10, decimal_places=2)
    # instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    duration = models.DurationField(default=timedelta(days=30))  # Example default value
    start_date = models.DateField(default=timezone.now())  # Example default value for start_date
    end_date = models.DateField(default=date.today() + timedelta(days=365))  # Example default value for end_date
    is_published = models.BooleanField(default=False)

    def __str__(self):
        return self.title
    

# # newww
# class Instructor(models.Model):
#     # Define fields for the Instructor model
#     name = models.CharField(max_length=100)
#     # Add other fields as needed


#newww
class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    content = models.TextField()
    sequence_number = models.PositiveIntegerField()
    estimated_duration_minutes = models.PositiveIntegerField()
    video_url = models.URLField(max_length=200, null=True, blank=True)
    # quiz = models.OneToOneField(Quiz, on_delete=models.SET_NULL, null=True, blank=True)

    # quiz = models.OneToOneField('Quiz', on_delete=models.SET_NULL, null=True, blank=True)
    # quiz = models.OneToOneField(Quiz, on_delete=models.SET_NULL, null=True, blank=True)
    # supplementary_materials = models.ManyToManyField('SupplementaryMaterial', blank=True)
    # supplementary_materials = models.ManyToManyField(SupplementaryMaterial, blank=True)    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    # tags = models.CharField(max_length=100)
    tags = models.CharField(max_length=20, default='')





#     # def __str__(self):
#     #     return self.user.username

# # @receiver(post_save, sender=User)
# # def create_user_profile(sender, instance, created, **kwargs):
# #     if created:
# #         UserProfile.objects.create(user=instance)

# # @receiver(post_save, sender=User)
# # def save_user_profile(sender, instance, **kwargs):
# #     instance.userprofile.save()

# class SupplementaryMaterial(models.Model):
#     name = models.CharField(max_length=100)

# # class Course(models.Model):
# #     title = models.CharField(max_length=100)
# #     description = models.TextField()
# #     level = models.CharField(max_length=20, choices=[
# #         ('beginner', 'Beginner'),
# #         ('intermediate', 'Intermediate'),
# #         ('advanced', 'Advanced'),
# #     ])
# #     tags = models.CharField(max_length=20, default='')
# #     price = models.DecimalField(max_digits=10, decimal_places=2)



# class Course(models.Model):
#     title = models.CharField(max_length=100)
#     description = models.TextField()
#     subject = models.CharField(max_length=50, choices=UserProfile.SUBJECT_CHOICES)
#     content_format = models.CharField(max_length=50, choices=[
#         ('videos', 'Videos'),
#         ('text', 'Text'),
#         ('interactive', 'Interactive Content')
#     ])
#     difficulty_level = models.CharField(max_length=50, choices=[
#         ('beginner', 'Beginner'),
#         ('intermediate', 'Intermediate'),
#         ('advanced', 'Advanced')
#     ])
#     # Add other fields as needed

# class Lesson(models.Model):
#     course = models.ForeignKey(Course, on_delete=models.CASCADE)
#     title = models.CharField(max_length=100)
#     content = models.TextField()
#     sequence_number = models.PositiveIntegerField()
#     estimated_duration_minutes = models.PositiveIntegerField()
#     video_url = models.URLField(max_length=200, null=True, blank=True)
#     supplementary_materials = models.ManyToManyField(SupplementaryMaterial, blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#     tags = models.CharField(max_length=20, default='')

# new 
# from django.db import models

# class MyModel(models.Model):
#     name = models.CharField(max_length=100)
#     # Add more fields as needed


# from django.contrib.auth.models import AbstractUser
# class User(AbstractUser):
#     date_of_birth = models.DateField(null=True, blank=True)

def __str__(self):
        return self.title


# new
from django.db import models

# class User(models.Model):
#     id = models.AutoField(primary_key=True)
#     username = models.CharField(max_length=255)
#     email = models.EmailField()
#     password = models.CharField(max_length=255)
#     date_joined = models.DateTimeField()
#     # Add other fields that exist in your users table

#     class Meta:
#         db_table = 'users'


class User(models.Model):
    username = models.CharField(max_length=150, unique=True)
    password = models.CharField(max_length=128)
    # Add more fields as needed for your user model

    def __str__(self):
        return self.username




# newww
class LearningPath(models.Model):
    user_profile = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    progress = models.IntegerField(default=0)  # Progress in percentage

def __str__(self):
        return f"{self.user_profile.user.username} - {self.course.title}"


# newww
from django.db import models
from .models import Course

class Assessment(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Question(models.Model):
    assessment = models.ForeignKey(Assessment, on_delete=models.CASCADE)
    question_text = models.TextField()
    correct_answer = models.CharField(max_length=255)

    def __str__(self):
        return self.question_text
