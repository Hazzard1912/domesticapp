CREATE VIEW profesionales AS
SELECT p.idProfesional, p.codigoUsuario, p.imagenID, p.disponibilidad, AVG(v.calificacion) AS promedioCalificacion
FROM profesional p
LEFT JOIN usuarioProfesionalServicio v ON p.idProfesional = v.codigoProfesional
GROUP BY p.idProfesional, p.codigoUsuario, p.imagenID, p.disponibilidad
ORDER BY promedioCalificacion DESC NULLS LAST; -- Ordenamos por promedio de calificación de forma descendente
