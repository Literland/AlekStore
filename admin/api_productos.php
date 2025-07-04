<?php
// admin/api_productos.php
header('Content-Type: application/json');
require_once 'db.php';

$result = $conn->query("SELECT id, nombre, descripcion, precio FROM productos ORDER BY id DESC");
$productos = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $productos[] = $row;
    }
}
echo json_encode($productos);
