import jwt
import os
from dotenv import load_dotenv
from datetime import datetime, timedelta

# Cargarmos las variables de entorno
load_dotenv()

def generate_token(user_id):
    # Generamos el payload
    payload = {
        'user_id': user_id,
        'exp': datetime.utcnow() + timedelta(days=1),
        'iat': datetime.utcnow()
    }

    # Generamos el token
    token = jwt.encode(payload, os.getenv('SECRET_KEY'), algorithm='HS256')

    return token
