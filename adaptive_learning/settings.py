

# settings.py
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# newww
LOGIN_URL = '/login/'  # Adjust this if your login URL is different

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-+@qwagz29kjm6%%w*kah0&=)yzriu!cj(uc4p^us%7q93i-#*y'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'api',
    'rest_framework',
    'corsheaders',
    'adaptive_learning',
    'rest_framework_simplejwt',

    # new
    # 'rest_framework',
    # 'corsheaders',
]
# new
REST_FRAMEWORK = {
    # 'DEFAULT_AUTHENTICATION_CLASSES': (
    #     'rest_framework_simplejwt.authentication.JWTAuthentication',
    # ),
        'DEFAULT_AUTHENTICATION_CLASSES': [],

}


MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
]
CORS_ORIGIN_ALLOW_ALL = True
ROOT_URLCONF = 'adaptive_learning.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'adaptive_learning.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases


# for postgresql
# DATABASES = {
#     'default': {
#         # 'ENGINE': 'django.db.backends.sqlite3',
#         # 'NAME': BASE_DIR / 'db.sqlite3',
#         #  'ENGINE': 'django.db.backends.postgresql',
#         'ENGINE': 'django.db.backends.postgresql',
#         'NAME': 'adaptive-learning',
#         'USER': 'riddhikhandekar',
#         'PASSWORD': 'riddhi',
#         'HOST': 'localhost',
#         'PORT': '5432',
#     }
# }

# for sql
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'project_db',   # Replace with your database name
        'USER': 'Riddhikhandekar',            # Replace with your MySQL username
        'PASSWORD': 'Riddhikhandekar',           # Replace with your MySQL password
        'HOST': 'localhost',
        'PORT': '3306',
    }
}




# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# In your Django settings.py
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:3000",  # Replace with your React development server URL
    "http://127.0.0.1:3000",
    # Add other domains as needed for production

    # Add any other domains/origins as needed for your frontend
]
# new 
# AUTH_USER_MODEL = 'adaptive_learning.User'


# Authentication backend settings (optional if using default settings)
AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',  # Default authentication backend
    # Add additional authentication backends if necessary
]

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('Bearer',),
}


LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'DEBUG',
    },
}


# settings.py
PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',  # default hasher
    # Add any other hashers if necessary
]


DEBUG = True

import os  # Import the os module

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]













