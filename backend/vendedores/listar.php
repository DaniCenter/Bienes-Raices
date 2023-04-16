<?php
require "../funciones.php";

$db = conectarDB();

$sql = "SELECT * FROM vendedores";
$resultado = mysqli_query($db, $sql);
$vendedores = [];
while ($row = mysqli_fetch_assoc($resultado)) {
  $vendedores[] = $row;
}
header('Content-Type: application/json');
echo json_encode([
  'message' => $vendedores,
]);

mysqli_close($db);
