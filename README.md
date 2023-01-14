# Servicio para obtener datos de una web en formato JSON

# Requerimientos
- Node.js 14 o superior
- Docker

# Instalacion

Instalar dependencias:

```
npm install

```

# Librerias utilizadas:

- Express.js - Framework de servidor para Node.js
- Cheerio - Librería de web scraping para Node.js
- request - Librería para hacer peticiones HTTP en Node.js

# Ejecucion con Docker

- Contruir la imagen
```
docker build -t my-scraper .
```
- Ejecutar el contenedor
```
docker run -p 3000:3000 my-scraper
```
