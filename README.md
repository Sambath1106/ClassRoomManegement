# Classroom Management

React + Vite frontend with a PHP API and PostgreSQL database for login and registration.

## Setup

1. Create a PostgreSQL database named `classroom_db` in pgAdmin.
2. Open the database's Query Tool and run [`database/schema.sql`](./database/schema.sql).
3. Stop any other PHP server currently using port `3000`. In a PowerShell terminal at the project root, configure the PostgreSQL connection. This project’s local PostgreSQL server listens on port `8000`; use the credentials for your local PostgreSQL server:

   ```powershell
   $env:DB_HOST = "localhost"
   $env:DB_PORT = "8000"
   $env:DB_NAME = "classroom_db"
   $env:DB_USER = "postgres"
   $env:DB_PASSWORD = "110706"
   php -S localhost:3001 -t .
   ```

   Keep this terminal open. The PHP installation must have the `pdo_pgsql` extension enabled.

4. Open a second terminal at the project root and run:

   ```powershell
   npm run dev
   ```

5. Open the Vite URL shown in the terminal (usually `http://localhost:5173`).

The React app calls `http://localhost:3001/Api/register.php` and `/Api/login.php`. The API permits development requests from Vite on `localhost:5173` and `127.0.0.1:5173`.

## API

- `POST /Api/register.php` — JSON body: `name`, `email`, `gender`, `classroom`, `role`, `password`, and `confirmPassword`.
- `POST /Api/login.php` — JSON body: `email` and `password`.

Both endpoints return JSON with a `success` boolean and a message (and a `user` object on successful login). Passwords are stored as PHP password hashes, not plain text.
