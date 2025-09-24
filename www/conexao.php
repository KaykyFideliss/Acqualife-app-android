<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);


// conexao.php

$host = "localhost";       // geralmente localhost
$usuario = "root";         // usuário padrão do XAMPP
$senha = "";               // senha padrão do XAMPP (geralmente vazio)
$banco = "acqualife";  // substitua pelo nome do seu banco

// Criar conexão
$mysqli = new mysqli($host, $usuario, $senha, $banco);

// Checar conexão
if ($mysqli->connect_errno) {
    die("Falha ao conectar ao MySQL: " . $mysqli->connect_error);
}

// Configurar charset para evitar problemas com acentos
$mysqli->set_charset("utf8mb4");
?>
