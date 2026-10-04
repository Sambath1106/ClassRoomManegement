<?php
declare(strict_types=1);

require_once __DIR__ . "/common.php";

requirePost();
$input = readJsonBody();
$email = strtolower(trim((string) ($input["email"] ?? "")));
$password = $input["password"] ?? "";

if (!filter_var($email, FILTER_VALIDATE_EMAIL) || !is_string($password) || $password === "") {
    respond(["success" => false, "message" => "Enter a valid email and password."], 400);
}

try {
    $pdo = database();
    $statement = $pdo->prepare(
        "SELECT id, name, email, gender, classroom, role, password_hash
         FROM users
         WHERE LOWER(email) = :email"
    );
    $statement->execute(["email" => $email]);
    $user = $statement->fetch();

    if (!$user || !password_verify($password, $user["password_hash"])) {
        respond(["success" => false, "message" => "Email or password is incorrect."], 401);
    }

    session_set_cookie_params([
        "httponly" => true,
        "secure" => !empty($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] !== "off",
        "samesite" => "Lax",
        "path" => "/",
    ]);
    session_start();
    session_regenerate_id(true);
    $_SESSION["user_id"] = $user["id"];

    unset($user["password_hash"]);
    respond(["success" => true, "user" => $user]);
} catch (PDOException $error) {
    databaseError($error);
}
