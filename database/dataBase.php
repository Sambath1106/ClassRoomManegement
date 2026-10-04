<?php

$host = "localhost";
$port = "8000";
$dbname = "classroom_db";
$user = "postgres";
$password = "110706";

$conn = pg_connect(
    "host=$host port=$port dbname=$dbname user=$user password=$password"
);

if (!$conn) {
    die(json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]));
}