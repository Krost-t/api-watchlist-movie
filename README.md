# 🎬 API Watchlist Movie

A **demo REST API** to manage users, movies, and a watchlist (a list of movies to watch).
This project is used as a **learning base** to understand how an API works (routes, authentication, database, validation).
The concepts learned here can be reused in other projects (frontend, mobile apps, or other APIs).

## 📖 About the Project

This repository is designed to **learn how an API works**: Express server structure, JWT authentication, ORM with Prisma, request validation with Zod, and code organisation (routes, controllers, middlewares).

The knowledge and patterns used here (authentication, CRUD operations, database relations) can be reused in many other projects such as web apps, mobile apps, or other APIs.

## 🧰 Tech Stack

| Technology     | Usage                         |
| -------------- | ----------------------------- |
| **Node.js**    | JavaScript runtime            |
| **Express**    | HTTP server / REST API        |
| **Prisma**     | ORM + migrations (PostgreSQL) |
| **PostgreSQL** | Database                      |
| **JWT**        | Authentication                |
| **bcryptjs**   | Password hashing              |
| **Zod**        | Request validation            |
| **dotenv**     | Environment variables         |

## ⚙️ Prerequisites

Before cloning and running the project, make sure you have:

* **Node.js** (v18 or higher, recommended v22) — https://nodejs.org
* **npm** (v9 or higher, included with Node.js)
* **PostgreSQL** (v12 or higher) — installed locally or via a service (for example Supabase or Neon)
* **Git** — to clone the repository

## 📥 Get the Project from GitHub

### 1. Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/Krost-t/api-watchlist-movie.git
cd api-watchlist-movie
```

If you use SSH:

```bash
git clone git@github.com:Krost-t/api-watchlist-movie.git
cd api-watchlist-movie
```

### 2. Choose a Branch (if needed)

The project can have several branches (for example `main`, `test`).
To list and switch branches:

```bash
git branch -a
git checkout test
```

Replace `test` with the branch you want.

## 📦 Install Dependencies

### 1. Install npm Packages

At the root of the project (`api-watchlist-movie`):

```bash
npm install
```

This installs all dependencies listed in `package.json` (Express, Prisma, JWT, Zod, etc.).

### 2. Environment Variables File

Create a **`.env`** file at the root of the project (next to `package.json`).
This file **must not be committed** to Git (it is already in `.gitignore`).

Example:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME?schema=public"
JWT_SECRET="a-long-random-secret-key"
JWT_EXPIRES_IN="7d"
```

You must adapt:

* **USER** : PostgreSQL user
* **PASSWORD** : PostgreSQL password
* **HOST** : `localhost` for local development or your database host
* **PORT** : usually `5432` for PostgreSQL
* **DATABASE_NAME** : the database name

Example for a local database:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/watchlist?schema=public"
JWT_SECRET="ChangeMeInProduction123!"
JWT_EXPIRES_IN="7d"
```

### 3. Create the Database

If it does not exist, create a PostgreSQL database (for example named `watchlist`).

### 4. Apply Prisma Migrations

To create the tables in the database:

```bash
npx prisma migrate dev
```

If Prisma asks for a migration name, you can use:

```bash
npx prisma migrate dev --name init

```

### 5. Generate the Prisma Client

To allow the code to use the models (User, Movie, WatchlistItem):

```bash
npx prisma generate
```

### 6. (Optional) Seed the Database with Test Data

To insert a seed user and some movies:

```bash
npm run seed:movies
```

## 🚀 Run the Project

### Development Mode (auto reload)

```bash
npm run dev
```

The server starts with **nodemon** on port **5001**.
Every time you change a file, the server restarts automatically.

In the terminal you should see something like:

```bash
DB Connected via Prisma
Server running on PORT 5001
```

## 🧪 Test the API

* **Base URL:** `http://localhost:5001`
* Use a tool like **Postman**, **Insomnia**, or **curl**.
* Send requests with the header:

```bash
Content-Type: application/json
```

Example request (register):

```bash
curl -X POST http://localhost:5001/auth/register \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Alice\",\"email\":\"alice@example.com\",\"password\":\"Secret123!\"}"
```

## 📂 Project Structure

```bash
api-watchlist-movie/
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.js
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   ├── validators/
│   └── server.js
├── .env
├── package.json
├── prisma.config.ts
└── README.md
```

## 🔐 API Endpoints

### Authentication (`/auth`)

| Method | Route            | Description     | Body / Auth                 |
| ------ | ---------------- | --------------- | --------------------------- |
| POST   | `/auth/register` | Register a user | `name`, `email`, `password` |
| POST   | `/auth/login`    | Login           | `email`, `password`         |
| GET    | `/auth/logout`   | Logout          | JWT cookie                  |

### Movies (`/movies`)

| Method | Route           | Description |
| ------ | --------------- | ----------- |
| GET    | `/movies/hello` | Test route  |

### Watchlist (`/watchlist`) — JWT protected

All routes below require a **JWT token**
(`Authorization: Bearer <token>` header or `jwt` cookie).

| Method | Route            | Description                 | Body / Params                             |
| ------ | ---------------- | --------------------------- | ----------------------------------------- |
| POST   | `/watchlist`     | Add movie to watchlist      | `movieId`, `status?`, `rating?`, `notes?` |
| PUT    | `/watchlist/:id` | Update item                 | `status?`, `rating?`, `notes?`            |
| DELETE | `/watchlist/:id` | Remove movie from watchlist | —                                         |

Possible watchlist status values:

```bash
PLANNED
WATCHING
COMPLETED
DROPPED
```

## 🔑 Environment Variables

| Variable         | Required | Description                        |
| ---------------- | -------- | ---------------------------------- |
| `DATABASE_URL`   | Yes      | PostgreSQL connection URL          |
| `JWT_SECRET`     | Yes      | Secret key used to sign JWT tokens |
| `JWT_EXPIRES_IN` | No       | Token lifetime (example `7d`)      |

## 📜 npm Scripts

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| `npm run dev`            | Start server in development mode |
| `npm run seed:movies`    | Run database seed                |
| `npx prisma migrate dev` | Create/apply migrations          |
| `npx prisma generate`    | Generate Prisma client           |

## 📄 License

ISC (see `package.json`).

## 📌 Summary

Clone the project:

```bash
git clone https://github.com/Krost-t/api-watchlist-movie.git
cd api-watchlist-movie
```

Install dependencies:

```bash
npm install
```

Create `.env`, then run:

```bash
npx prisma migrate dev
npx prisma generate
```

Start the server:

```bash
npm run dev
```

The API will be available at:

```bash
http://localhost:5001
```

This project is designed to **learn how an API works**.
The concepts used here (routes, authentication, database, validation) can be reused in your future projects.
