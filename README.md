# Taxi 24
este proyecto es un conjunto de  APIs que otras compañías podrían
utilizar para gestionar su flota de taxis. 

## Instalación
 -  Requiere un sistema de docker para poder generar el servidor virtual de la base de datos con docker-compose.
el utilizado en el proyecto fue [Docker-docs](https://www.docker.com/products/docker-desktop/).

 - Requiere de node 18.17 para su funcionamiento

```cmd
 docker-compose up
 npm i
 npx prisma migrate dev
 ```


## Uso
```cmd
 npm run start:dev
 ```


## Documentación de la API

Al correr el proyecto puedes ingresar a [Swagger](http://localhost:3001/document) para ver la documentación.

## Posibles mejoras:

- utilizar el servicio de googlemaps para la distancia especifica