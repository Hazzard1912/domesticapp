INSERT INTO usuario(contraseña,telefono,nombre,apellido,fechaNacimiento,latitud,longitud,
email,fotoPerfil,fotoDocumento)
VALUES
('contraseña1','3107894125','Mannix','Montgomery', '1995-10-01', 3.425071160714475, -76.52570131384293, 'sed.dictum@yahoo.net','http://example.com/profile-pic-1.jpg', 'http://example.com/profile-pic-2.jpg'),
('contraseña2', '3118854769','"Rowan','Carver','1999-06-29', 3.4322680330963444, -76.48072603399139, 'sem@google.edu','http://example.com/profile-pic-3.jpg', 'http://example.com/profile-pic-4.jpg' ),
('contraseña3', '3004442514', 'Angela', 'Norris', '1995-05-01', 3.385487397751655, -76.51814821377114, 'suscipit.nonummy@yahoo.edu', 'http://example.com/profile-pic-5.jpg', 'http://example.com/profile-pic-6.jpg' ),
('contraseña4', '3032584141','Alexis', 'Downs', '2001-12-06', 3.2586714699746753, -76.5375459488978, 'urna.nullam@hotmail.couk','http://example.com/profile-pic-7.jpg', 'http://example.com/profile-pic-8.jpg' );

INSERT INTO profesional(codigoUsuario,imagenID,disponibilidad)
VALUES
(1 ,'http://example.com/profile-pic-12.jpg','true'),
(2 ,'http://example.com/profile-pic-10.jpg', 'true'),
(3 ,'http://example.com/profile-pic-11.jpg', 'false'),
(4,'http://example.com/profile-pic-13.jpg', 'false');

INSERT INTO categoria(nombre, unidadTrabajo)
VALUES
('Educación Primaria', 'hora'),
('Educación Secundaria', 'hora'),
('Limpieza', 'hora'),
('Reparación', 'hora'),
('Cuidado', 'hora'),
('Jardinería', 'hora'),
('Mudanza', 'dia'),
('Catering', 'persona'),
('Pintura', 'm2');

INSERT INTO servicio(codigoCategoria, descripcion, labor)
VALUES
(1 , 'Descripcion del servicio1' , 'labor1' ),
(1 ,'Descripcion del servicio2' , 'labor2' ),
(1 , 'Descripcion del servicio3' , 'labor3'),
(2 , 'Descripcion del servicio4', 'labor4');


INSERT INTO medioPago(nombre, numero, banco)
VALUES
('Nequi', '00001' , 'BBVA'),
('Tarjeta de crédito', '00002' , 'AV Villas'),
('Daviplata', '00003' , 'Davivienda'),
('Paypal', '00004' , 'Banco popular de Colombia');

INSERT INTO usuarioPago(CodigoUsuario,codigoMedioPago)
VALUES
(1 , 1),
(2 , 2),
(3 , 3),
(4 , 4);

INSERT INTO profesionalServicio(codigoProfesional,CodigoServicio,precio)
VALUES
(1 ,2 , 100000),
(1 ,3 , 60000),
(2,1 , 170000),
(4 ,4 , 300000);

INSERT INTO usuarioProfesionalServicio(codigoProfesional,codigoUsuario, codigoServicio, calificacion, pago)
VALUES
(1 ,1 ,1 , 5 ,100000),
(2 ,2 ,2 , 2 ,60000),
(3 ,3 ,3 , 4 ,170000),
(4 ,4 ,4 , 5 ,300000);
