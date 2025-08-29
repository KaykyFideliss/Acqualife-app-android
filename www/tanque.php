<?php
header("Content-Type: application/json; charset=UTF-8");

include "conexao.php"; // agora a variável $conn já está disponível


if ($conn->connect_error) {
    die(json_encode(["error" => "Falha na conexão com BD"]));
}

// Consulta (últimos valores dos tanques)
$sql = "SELECT nivel, capacidade FROM tanques ORDER BY id DESC LIMIT 3";
$result = $conn->query($sql);

$tanques = [];
while ($row = $result->fetch_assoc()) {
    $tanques[] = [
        "nivel" => (int)$row["nivel"],
        "capacidade" => (int)$row["capacidade"]
    ];
}

echo json_encode($tanques);

$conn->close();
?>