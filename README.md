# API de Mantenimiento ML

API REST para gestionar equipos, técnicos y mantenimientos, con autenticación JWT. Proyecto del curso PIAD-527 (SENATI).

## Tecnologías

- Node.js + Express 5
- MySQL 8 + Sequelize
- JWT + bcrypt (autenticación)
- express-validator, helmet, cors, morgan
- Docker y docker-compose

## Requisitos

- Node.js 20 o superior
- MySQL 8 (o Docker Desktop)

## Instalación local

```bash
git clone https://github.com/eltonarroyo5-source/api-mantenimiento.git
cd api-mantenimiento
npm install
```

Crea un archivo `.env` a partir de `.env.example`:

```
DB_HOST=localhost
DB_PORT=3306
DB_NAME=mantenimiento_ml
DB_USER=root
DB_PASSWORD=tu_password
PORT=3000
JWT_SECRET=una_clave_secreta
```

Ejecuta el script `database/schema.sql` en MySQL para crear la base de datos y las tablas. Luego inicia el servidor:

```bash
npm run dev
```

La API queda en `http://localhost:3000/api/v1`.

## Uso con Docker

```bash
docker compose up --build
```

Levanta MySQL (puerto 3307 en tu PC) y la API (puerto 3000). Para detener todo:

```bash
docker compose down
```

## Autenticación

Primero registra un usuario y luego inicia sesión para obtener el token. Envíalo en cada petición protegida:

```
Authorization: Bearer <token>
```

## Endpoints

Base: `/api/v1`

| Método | Ruta | Descripción | Requiere token |
|--------|------|-------------|----------------|
| POST | `/auth/registrar` | Registrar usuario | No |
| POST | `/auth/login` | Iniciar sesión | No |
| GET | `/equipos` | Listar equipos | Sí |
| GET | `/equipos/:id` | Obtener un equipo | Sí |
| POST | `/equipos` | Crear equipo | Sí |
| PUT | `/equipos/:id` | Actualizar equipo | Sí |
| DELETE | `/equipos/:id` | Eliminar equipo | Sí |
| GET/POST/PUT/DELETE | `/tecnicos` | CRUD de técnicos | Sí |
| GET/POST/PUT/DELETE | `/mantenimientos` | CRUD de mantenimientos | Sí |

## Estructura

```
├── config/          Conexión a la base de datos
├── controllers/     Lógica de cada recurso
├── middlewares/     Validación y autenticación JWT
├── models/          Modelos Sequelize
├── routes/          Rutas de la API
├── database/        Script SQL
├── Dockerfile
├── docker-compose.yml
└── index.js
```

## Frontend

Repositorio: https://github.com/eltonarroyo5-source/frontend-mantenimiento

## Autor

Elton Arroyo — SENATI