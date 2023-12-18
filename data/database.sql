CREATE TABLE usuario(
    idUsuario SERIAL PRIMARY KEY NOT NULL,
    contraseña VARCHAR(30),
    telefono VARCHAR(50),
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    fechaNacimiento DATE,
    recibo VARCHAR(100),
    direccion VARCHAR(50),
    email VARCHAR(50),
    fotoPerfil VARCHAR(100),
    fotoDocumento VARCHAR(100)
);

CREATE TABLE profesional(
    idProfesional SERIAL PRIMARY KEY,
    codigoUsuario INT,
    imagenID VARCHAR(100),
    disponibilidad BOOLEAN,
    FOREIGN KEY(codigoUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE categoria(
    idCategoria SERIAL PRIMARY KEY,
    nombre VARCHAR(30),
    unidadTrabajo VARCHAR(30)
);

CREATE TABLE servicio(
    idServicio SERIAL PRIMARY KEY,
    codigoCategoria INT,
    descripcion TEXT,
    labor VARCHAR(50),
    FOREIGN KEY (codigoCategoria) REFERENCES categoria(idCategoria)
);

CREATE TABLE medioPago(
    idMedioPago SERIAL PRIMARY KEY,
    nombre VARCHAR(30),
    numero VARCHAR(30),
    banco VARCHAR(30)
);

CREATE TABLE usuarioPago(
    codigoUsuario INT,
    codigoMedioPago INT,
    FOREIGN KEY (codigoUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (codigoMedioPago) REFERENCES medioPago(idMedioPago),
    PRIMARY KEY (codigoUsuario, codigoMedioPago)
);

CREATE TABLE profesionalServicio(
    codigoProfesional INT,
    codigoServicio INT,
    precio INT,
    FOREIGN KEY (codigoPr   ofesional) REFERENCES profesional(idProfesional),
    FOREIGN KEY (codigoServicio) REFERENCES servicio(idServicio),
    PRIMARY KEY (codigoProfesional, codigoServicio)
);

CREATE TABLE usuarioProfesionalServicio(
    codigoProfesional INT,
    codigoUsuario INT,
    codigoServicio INT,
    calificacion INT,
    pago INT,
    FOREIGN KEY (codigoProfesional) REFERENCES profesional(idProfesional),
    FOREIGN KEY (codigoUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (codigoServicio) REFERENCES servicio(idServicio),
    PRIMARY KEY (codigoProfesional, codigoUsuario, codigoServicio),
    CONSTRAINT check_calif CHECK (calificacion>0 AND calificacion<=5)
);
