<?php
declare(strict_types=1);

require_once __DIR__ . "/common.php";

requirePost();
$input = readJsonBody();

$name = trim((string) ($input["name"] ?? ""));
$email = strtolower(trim((string) ($input["email"] ?? "")));
$gender = $input["gender"] ?? "";
$classroom = filter_var($input["classroom"] ?? null, FILTER_VALIDATE_INT);
$role = $input["role"] ?? "";
$password = $input["password"] ?? "";
$confirmPassword = $input["confirmPassword"] ?? "";

if ($name === "" || strlen($name) > 120) {
    respond(["success" => false, "message" => "Enter a name up to 120 characters."], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || strlen($email) > 254) {
    respond(["success" => false, "message" => "Enter a valid email address."], 400);
}

if (!in_array($gender, ["Male", "Female"], true)) {
    respond(["success" => false, "message" => "Choose a valid gender."], 400);
}

if ($classroom === false || $classroom < 400 || $classroom > 411) {
    respond(["success" => false, "message" => "Choose a valid classroom."], 400);
}

if (!in_array($role, ["student", "teacher"], true)) {
    respond(["success" => false, "message" => "Choose a valid role."], 400);
}

if (!is_string($password) || strlen($password) < 8) {
    respond(["success" => false, "message" => "Password must be at least 8 characters."], 400);
}

if (!is_string($confirmPassword) || !hash_equals($password, $confirmPassword)) {
    respond(["success" => false, "message" => "Passwords do not match."], 400);
}

try {
    $pdo = database();
    $statement = $pdo->prepare(
        "INSERT INTO users (name, email, gender, classroom, role, password_hash)
         VALUES (:name, :email, :gender, :classroom, :role, :password_hash)
         RETURNING id"
    );
    $statement->execute([
        "name" => $name,
        "email" => $email,
        "gender" => $gender,
        "classroom" => $classroom,
        "role" => $role,
        "password_hash" => password_hash($password, PASSWORD_DEFAULT),
    ]);

    $user = [
        "id" => $statement->fetchColumn(),
        "name" => $name,
        "email" => $email,
        "gender" => $gender,
        "classroom" => $classroom,
        "role" => $role,
    ];

    session_set_cookie_params([
        "httponly" => true,
        "secure" => !empty($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] !== "off",
        "samesite" => "Lax",
        "path" => "/",
    ]);
    session_start();
    session_regenerate_id(true);
    $_SESSION["user_id"] = $user["id"];

    respond([
        "success" => true,
        "message" => "Registration successful.",
        "user" => $user,
    ]);
} catch (PDOException $error) {
    if ($error->getCode() === "23505") {
        respond(["success" => false, "message" => "An account with this email already exists."], 409);
    }

    databaseError($error);
}
