CREATE PROCEDURE actualizarTelefonoUsuario (@idUsuario INT, @nuevoTelefono CHAR(10)) AS
BEGIN
UPDATE usuario
SET telefono = @nuevoTelefono,
WHERE idUsuario = @idUsuario;
END $_$ LANGUAGE plpgsql ;
