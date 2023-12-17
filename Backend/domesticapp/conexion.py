import psycopg2

# Configuración de conexión a la base de datos
db_config = {
    'dbname': 'database',
    'user': 'sergioSO22',
    'password': 'db1234',
    'host': 'localhost',  # Puedes cambiarlo si tu base de datos está en otro host
    'port': '5432'        # El puerto por defecto para PostgreSQL es 5432
}
try:
    connection = psycopg2.connect(**db_config)
    cursor = connection.cursor()

    # Realizar operaciones en la base de datos aquí

    # Cerrar la conexión cuando hayas terminado
    connection.close()

except psycopg2.Error as e:
    print(f"Error al conectar a la base de datos: {e}")


connection = None  # Inicializa la variable fuera del bloque try

try:
    connection = psycopg2.connect(**db_config)
    print("Conexión exitosa a la base de datos.")
except psycopg2.Error as e:
    print(f"Error al conectar a la base de datos: {e}")
finally:
    if connection:
        connection.close()

