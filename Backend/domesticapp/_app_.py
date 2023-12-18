from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from backend import models
from backend.database_config import engine, SessionLocal

app = FastAPI()

# Configurar la base de datos
models.Base.metadata.create_all(bind=engine)

# Ruta para registrar un usuario
@app.post("/register/")
def register_user(username: str, password: str, email: str, db: Session = Depends(SessionLocal)):
    # Lógica para registrar al usuario en la base de datos
    # Hacer un hash de la contraseña antes de almacenarla en la base de datos
    # ...

    # Crear un nuevo usuario
    db_user = models.User(username=username, password=password, email=email)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    
    return {"message": "Usuario registrado exitosamente"}

# Ruta para obtener la lista de usuarios
@app.get("/users/")
def get_users(skip: int = 0, limit: int = 10, db: Session = Depends(SessionLocal)):
    users = db.query(models.User).offset(skip).limit(limit).all()
    return users