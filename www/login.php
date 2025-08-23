<?php

// Cabeçalhos CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Responde requisições OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "conexao.php";

// Pega dados do corpo da requisição
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Dados inválidos"]);
    exit;
}

$email = trim($data['email'] ?? '');
$password = trim($data['password'] ?? '');

// Validações básicas
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Email inválido"]);
    exit;
}

if (strlen($password) < 8) {
    echo json_encode(["success" => false, "message" => "Senha deve ter pelo menos 8 caracteres"]);
    exit;
}

// Consulta usuário no banco
$stmt = $mysqli->prepare("SELECT id_user, nome, senha FROM usuario WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows === 0) {
    // Usuário não encontrado
    echo json_encode(["success" => false, "message" => "Email ou senha incorretos"]);
    exit;
}

$stmt->bind_result($id_user, $nome, $hash);
$stmt->fetch();

// Verifica senha
if (!password_verify($password, $hash)) {
    echo json_encode(["success" => false, "message" => "Email ou senha incorretos"]);
    exit;
}

// Login bem-sucedido
echo json_encode([
    "success" => true,
    "message" => "Login realizado com sucesso",
    "user" => [
        "id" => $id_user,
        "nome" => $nome,
        "email" => $email
    ]
]);

$stmt->close();
$mysqli->close();
