# models.py
from sqlalchemy import Column, Integer, String, Date, LargeBinary
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Usuario(Base):
    __tablename__ = 'usuario'

    idUsuario = Column(Integer, primary_key=True, index=True)
    contraseña = Column(String, nullable=False)
    telefono = Column(String)
    nombre = Column(String, nullable=False)
    apellido = Column(String, nullable=False)
    fechaNacimiento = Column(Date)
    # Puedes utilizar LargeBinary para representar imágenes en la base de datos
    fotoPerfil = Column(LargeBinary)
    fotoDocumento = Column(LargeBinary)
    direccion = Column(String, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)

