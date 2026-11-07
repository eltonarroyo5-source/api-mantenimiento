# API de Mantenimiento (Express + Sequelize + MySQL)

API REST para gestionar equipos, técnicos y mantenimientos, con autenticación JWT.

## Tecnologías
Node.js, Express, Sequelize, MySQL, JWT, bcrypt, express-validator, helmet, morgan, Docker.

## Requisitos
- Node.js 20 o superior
- MySQL 8 (o Docker Desktop)

## Instalación local
1. `npm install`
2. Copia `.env.example` a `.env` y completa los valores (`DB_PASSWORD`, `JWT_SECRET`).
3. Ejecuta `database/schema.sql` en MySQL Workbench.
4. `npm run dev`

## Con Docker
1. Completa `DB_PASSWORD` y `JWT_SECRET` en `.env`.
2. `docker compose up --build`
3. API en `http://localhost:3000`.

## Endpoints (prefijo `/api/v1`)
| Método | Ruta | Descripción |
|---|---|---|
| POST | `/auth/registro` | Registrar usuario |
| POST | `/auth/login` | Iniciar sesión (devuelve token) |
| GET, POST | `/equipos` | Listar y crear equipos |
| GET, PUT, DELETE | `/equipos/:id` | Ver, editar y eliminar |
| GET, POST | `/tecnicos` | Listar y crear técnicos |
| GET, PUT, DELETE | `/tecnicos/:id` | Ver, editar y eliminar |
| GET, POST | `/mantenimientos` | Listar y crear mantenimientos |
| GET, PUT, DELETE | `/mantenimientos/:id` | Ver, editar y eliminar |

Las rutas de datos requieren el encabezado `Authorization: Bearer <token>`.

## Frontend
https://github.com/eltonarroyo5-source/frontend-mantenimiento