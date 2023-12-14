CREATE OR REPLACE FUNCTION promedio_calificacion(idTrabajador INTEGER) RETURNS NUMERIC AS 
$_$
BEGIN
RETURN (
    SELECT AVG(calificacion) 
    FROM usuarioProfesionalServicio 
    WHERE codigoProfesional = idTrabajador
);
END;
$_$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION distancia (idTrabajador INTEGER, idUsuario INTEGER) RETURNS NUMERIC AS 
$_$
BEGIN
RETURN (
    
);
END;
$_$ LANGUAGE plpgsql;