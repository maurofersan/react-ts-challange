# Frontend con React y TypeScript

Este es el frontend de la aplicación desarrollado con React, TypeScript y Vite. Implementa autenticación con contexto y `useReducer`, además de una lista virtualizada para manejar eficientemente 2000 elementos.

## Requisitos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/) para la gestión de paquetes

## Instalación

Clona el repositorio y accede a la carpeta del proyecto:

```sh
git clone <URL_DEL_REPOSITORIO>
cd frontend
```

Instala las dependencias necesarias:

```sh
npm install
# o
yarn install
```

## Uso

### Desarrollo

Para iniciar el servidor en modo desarrollo:

```sh
npm run dev
# o
yarn dev
```

### Producción

Para compilar y ejecutar en modo producción:

```sh
npm run build
npm run preview
```

## Autenticación

La aplicación cuenta con un sistema de autenticación basado en contexto y `useReducer`. Para iniciar sesión, utiliza las siguientes credenciales de prueba:

```json
{
  "email": "mauro@gmail.com",
  "password": "123456"
}
```

Tras iniciar sesión exitosamente, se almacena un token en el `localStorage`.

## Características

- **Gestión de estado** con `useContext` y `useReducer`.
- **Autenticación** con almacenamiento de token en `localStorage`.
- **Optimización de listas** con `react-window` para renderizar 2000 elementos de manera eficiente.
- **Modularización** con estructura basada en features.
- **CSS Modules** para un mejor aislamiento de estilos.

## Tecnologías usadas

- React 19 con TypeScript
- React Router DOM 7
- Context API + `useReducer`
- React Window para listas virtualizadas
- Vite para el entorno de desarrollo
- Axios para llamadas HTTP
- ESLint y Prettier para calidad de código

## Notas

- La autenticación es simulada con un token estático.
- La lista de 2000 elementos se obtiene desde el backend en NestJS.
