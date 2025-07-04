<?php
// admin/db.php
// Cambia estos valores según tu entorno
$host = 'localhost';
$user = 'root';
$pass = '';
$db = 'alekstore';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}
?>
