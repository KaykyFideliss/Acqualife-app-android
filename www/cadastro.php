<?php

// Cabeçalhos CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Responde requisições OPTIONS (pré-verificação)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once "conexao.php";

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Dados inválidos"]);
    exit;
}

$name     = trim($data['name'] ?? '');
$phone    = trim($data['phone'] ?? '');
$email    = trim($data['email'] ?? '');
$password = trim($data['password'] ?? '');

// Validações
if (strlen($name) < 3) {
    echo json_encode(["success" => false, "message" => "Nome inválido"]);
    exit;
}

if (!preg_match('/^[0-9]{11}$/', $phone)) {
    echo json_encode(["success" => false, "message" => "Telefone deve ter DDD + número (11 dígitos)"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Email inválido"]);
    exit;
}

if (strlen($password) < 8) {
    echo json_encode(["success" => false, "message" => "A senha deve ter pelo menos 8 caracteres"]);
    exit;
}

// Verifica se email já existe
$stmt = $mysqli->prepare("SELECT id_user FROM usuario WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->store_result();

if ($stmt->num_rows > 0) {
    echo json_encode(["success" => false, "message" => "Este email já está cadastrado"]);
    exit;
}
$stmt->close();

// Criptografa senha
$hash = password_hash($password, PASSWORD_DEFAULT);

// Insere no banco
$stmt = $mysqli->prepare("INSERT INTO usuario (nome, telefone, email, senha) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $phone, $email, $hash);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Usuário cadastrado com sucesso"]);
    
} else {
    echo json_encode(["success" => false, "message" => "Erro ao cadastrar"]);
}

$stmt->close();
$mysqli->close();
