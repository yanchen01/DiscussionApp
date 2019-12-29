import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    MONGO_URI = "mongodb+srv://ychen:<password>@cluster0-nkqir.mongodb.net/test?retryWrites=true&w=majority"