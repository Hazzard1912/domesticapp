# app.py
from fastapi import FastAPI
from backend.routes import items
from backend.database_config import engine

app = FastAPI()

# Configurar la base de datos
# ...

# Agregar las rutas
app.include_router(items.router, prefix="/api")