# Domesticapp FastAPI Backend

Backend del proyecto DomesticApp.

## Instalación

1. Navega al directorio del proyecto:
    ```
    cd directorio_del_proyecto
    ```

2. Crea un entorno virtual:
    ```
    python3 -m venv venv
    ```

3. Activa el entorno virtual:
    - En Windows:
        ```
        .\venv\Scripts\activate
        ```
    - En Unix o MacOS:
        ```
        source venv/bin/activate
        ```

4. Instala las dependencias:
    ```
    pip install -r requirements.txt
    ```

5. Ejecuta el servidor:
    ```
    uvicorn main:app --reload
    ```
