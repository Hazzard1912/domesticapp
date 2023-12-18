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

CREATE FUNCTION distancia (@lat1 FLOAT, @lon1 FLOAT, @lat2 FLOAT, @lon2 FLOAT) RETURNS FLOAT AS
BEGIN
    DECLARE @R FLOAT = 6371; -- Radio de la Tierra en kilómetros
    
    DECLARE @dLat FLOAT = RADIANS(@lat2 - @lat1);
    DECLARE @dLon FLOAT = RADIANS(@lon2 - @lon1);
    
    DECLARE @a FLOAT = SIN(@dLat / 2) * SIN(@dLat / 2) + COS(RADIANS(@lat1)) * COS(RADIANS(@lat2)) * SIN(@dLon / 2) * SIN(@dLon / 2);
    DECLARE @c FLOAT = 2 * ATN2(SQRT(@a), SQRT(1 - @a));
    
    DECLARE @distancia FLOAT = @R * @c; -- Distancia en kilómetros
    
    RETURN @distancia;
END;
$_$ LANGUAGE plpgsql;