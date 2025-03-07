# Backend con NestJS

Este es un backend básico desarrollado con NestJS que proporciona dos endpoints principales:

- Un endpoint para obtener una lista de 2000 elementos.
- Un endpoint de autenticación que valida credenciales y devuelve un token.

## Requisitos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) para la gestión de paquetes

## Instalación

Clona el repositorio y accede a la carpeta del proyecto:

```sh
git clone https://github.com/maurofersan/react-ts-challange.git
cd backend
```

Instala las dependencias necesarias:

```sh
npm install
# o
yarn install
```

## Uso

### Desarrollo

Para iniciar el servidor en modo desarrollo (con hot-reload):

```sh
npm run start:dev
# o
yarn start:dev
```

### Producción

Para compilar y ejecutar en modo producción:

```sh
npm run build
npm run start:prod
```

## Endpoints

### Obtener datos

```http
GET /data
```

Devuelve un array de 2000 objetos con la siguiente estructura:

```json
[
  { "id": "1", "name": "Item 1" },
  { "id": "2", "name": "Item 2" },
  ...
]
```

### Autenticación

```http
POST /auth/login
```

#### Cuerpo de la petición

```json
{
  "email": "mauro@gmail.com",
  "password": "123456"
}
```

#### Respuesta exitosa

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Si las credenciales son incorrectas, se devuelve un error `401 Unauthorized`.

## Scripts disponibles

- `npm run start` - Inicia el servidor en modo normal.
- `npm run start:dev` - Inicia el servidor en modo desarrollo con recarga automática.
- `npm run start:prod` - Ejecuta la versión de producción.
- `npm run build` - Compila el código TypeScript en `dist/`.
- `npm run test` - Ejecuta los tests.

## Tecnologías usadas

- NestJS
- TypeScript
- Prettier & ESLint (para formato y linting)
- Jest (para testing)

## Notas

- Este backend no tiene base de datos ni autenticación real
