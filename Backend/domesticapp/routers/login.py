from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from services.token_utils import generate_token

# Pendiente implementar sqlalchemy

router = APIRouter()

@router.post("/auth")
async def auth(form_data: OAuth2PasswordRequestForm = Depends()):
    email = form_data.username
    password = form_data.password

    if email != "":

    # Validar que el usuario exista en la base de datos

    # Generar el token:
        jwt = generate_token(email)

        return {"access_token": jwt, "token_type": "bearer"}
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Incorrect username or password",
        headers={"WWW-Authenticate": "Bearer"}
    )