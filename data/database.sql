CREATE TABLE usuario(
    idUsuario SERIAL PRIMARY KEY NOT NULL,
    contraseña VARCHAR(30),
    telefono CHAR(10),
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    fechaNacimiento DATE,
    recibo VARCHAR(100),
    latitud FLOAT(20),
    longitud FLOAT(20),
    email VARCHAR(50),
    fotoPerfil VARCHAR(100),
    fotoDocumento VARCHAR(100)
);

CREATE TABLE profesional(
    idProfesional SERIAL PRIMARY KEY NOT NULL,
    codigoUsuario INT NOT NULL,
    imagenID VARCHAR(100),
    disponibilidad BOOLEAN,
    FOREIGN KEY(codigoUsuario) REFERENCES usuario(idUsuario) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE categoria(
    idCategoria SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(30),
    unidadTrabajo VARCHAR(30)
);

CREATE TABLE servicio(
    idServicio SERIAL PRIMARY KEY NOT NULL,
    codigoCategoria INT NOT NULL,
    descripcion TEXT,
    labor VARCHAR(50),
    FOREIGN KEY (codigoCategoria) REFERENCES categoria(idCategoria) ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE medioPago(
    idMedioPago SERIAL PRIMARY KEY NOT NULL,
    nombre VARCHAR(30),
    numero VARCHAR(30),
    banco VARCHAR(30)
);

CREATE TABLE usuarioPago(
    codigoUsuario INT NOT NULL,
    codigoMedioPago INT NOT NULL,
    FOREIGN KEY (codigoUsuario) REFERENCES usuario(idUsuario) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (codigoMedioPago) REFERENCES medioPago(idMedioPago) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (codigoUsuario, codigoMedioPago)
);

CREATE TABLE profesionalServicio(
    codigoProfesional INT NOT NULL,
    codigoServicio INT NOT NULL,
    precio INT,
    FOREIGN KEY (codigoProfesional) REFERENCES profesional(idProfesional) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (codigoServicio) REFERENCES servicio(idServicio) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (codigoProfesional, codigoServicio)
);

CREATE TABLE usuarioProfesionalServicio(
    codigoProfesional INT NOT NULL,
    codigoUsuario INT NOT NULL,
    codigoServicio INT NOT NULL,
    calificacion INT,
    pago INT,
    FOREIGN KEY (codigoProfesional) REFERENCES profesional(idProfesional) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (codigoUsuario) REFERENCES usuario(idUsuario) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (codigoServicio) REFERENCES servicio(idServicio) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (codigoProfesional, codigoUsuario, codigoServicio),
    CONSTRAINT check_calif CHECK (calificacion>0 AND calificacion<=5)
);
