<?php
declare(strict_types=1);

$allowedOrigins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
];
$origin = $_SERVER["HTTP_ORIGIN"] ?? "";

if (in_array($origin, $allowedOrigins, true)) {
    header("Access-Control-Allow-Origin: " . $origin);
    header("Access-Control-Allow-Credentials: true");
    header("Vary: Origin");
}

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if (($_SERVER["REQUEST_METHOD"] ?? "") === "OPTIONS") {
    http_response_code(204);
    exit;
}

function respond(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

function requirePost(): void
{
    if (($_SERVER["REQUEST_METHOD"] ?? "") !== "POST") {
        header("Allow: POST, OPTIONS");
        respond(["success" => false, "message" => "Use POST for this endpoint."], 405);
    }
}

function readJsonBody(): array
{
    $body = file_get_contents("php://input");
    $data = json_decode($body === false ? "" : $body, true);

    if (!is_array($data)) {
        respond(["success" => false, "message" => "Request body must be valid JSON."], 400);
    }

    return $data;
}

function database(): PDO
{
    $host = getenv("DB_HOST") ?: "localhost";
    $port = getenv("DB_PORT") ?: "8000";
    $name = getenv("DB_NAME") ?: "classroom_db";
    $user = getenv("DB_USER") ?: "postgres";
    $password = getenv("DB_PASSWORD");

    if ($password === false) {
        $password = "";
    }

    return new PDO(
        "pgsql:host={$host};port={$port};dbname={$name}",
        $user,
        $password,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]
    );
}

function databaseError(PDOException $error): void
{
    error_log("Classroom API database error: " . $error->getMessage());

    if ($error->getCode() === "42P01") {
        respond(
            ["success" => false, "message" => "The users table is missing. Run database/schema.sql in pgAdmin."],
            500
        );
    }

    respond(
        ["success" => false, "message" => "Database connection failed. Check the PostgreSQL server and API database settings."],
        500
    );
}
