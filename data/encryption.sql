CREATE MASTER KEY ENCRYPTION BY PASSWORD = 'EnCR!pY4?*#';

CREATE CERTIFICATE certificado
WITH SUBJECT = 'Datos encriptados';

CREATE SYMMETRIC KEY llaveSimetrica
WITH ALGORITHM = AES_256
ENCRYPTION BY CERTIFICATE certificado;

ALTER TABLE usuario
ADD contraseñaEncriptada varbinary(160);

ALTER TABLE medioPago
ADD numeroEncriptado varbinary(160);

OPEN SYMMETRIC KEY llaveSimetrica  
DECRYPTION BY CERTIFICATE certificado;

UPDATE usuario  
SET contraseñaEncriptada = EncryptByKey(Key_GUID('llaveSimetrica'),  
contraseña, 1, HASHBYTES('SHA2_256', CONVERT( varbinary, idUsuario)));  

UPDATE medioPago  
SET numeroEncriptado = EncryptByKey(Key_GUID('llaveSimetrica'),  
numero, 1, HASHBYTES('SHA2_256', CONVERT( varbinary, idMedioPago)));  

CLOSE SYMMETRIC KEY llaveSimetrica;