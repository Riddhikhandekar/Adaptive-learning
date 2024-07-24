# api/apps.py
from django.apps import AppConfig

class ApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'

    def ready(self):
        import api.signals  # Import signals for the api app


# class AdaptiveLearningConfig(AppConfig):
#     default_auto_field = 'django.db.models.BigAutoField'
#     name = 'adaptive_learning'

#     def ready(self):
#         import adaptive_learning.signals  # Import signals for the adaptive_learning app

