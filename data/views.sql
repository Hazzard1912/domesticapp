-- Vista

SELECT * FROM database

CREATE VIEW profesionales
as SELECT
p.idProfesional,
p.codigoUsuario,
p.imagenID,
p.disponibilidad,
AVG(v.calificacion) AS promedioCalificacion
FROM
profesional p

LEFT JOIN
    valoraciones v ON p.idProfesional = v.idProfesional
GROUP BY
p.idProfesional, p.codigoUsuario, p.imagenID, p.disponibilidad
ORDER BY
promedioCalificacion DESC NULLS LAST; -- Ordenamos por promedio de calificación de forma descendente

--Select * from profesionales