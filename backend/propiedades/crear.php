<?php
require "../funciones.php";
$errores = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $db = conectarDB();

  $titulo = $_POST["tituloPropiedad"];
  $precio = $_POST["precioPropiedad"];
  $descripcion = $_POST["descripcion"];
  $img = $_POST["imgPropiedad"];
  $nhabitaciones = $_POST["nHabitaciones"];
  $nbaños = $_POST["nBaños"];
  $nestacionamientos = $_POST["nEstacionamientos"];
  $idvendedor = $_POST["idVendedor"];

  if (!$titulo) {
    $errores[] = "Debes añadir un titulo";
  }
  if (!$precio) {
    $errores[] = "El precio es obligatorio";
  }
  if (strlen($descripcion) < 50) {
    $errores[] = "La descripccion es obligatoria y de minimo 50 caracteres";
  }
  if (!$nhabitaciones) {
    $errores[] = "El numero de habitaciones es obligatorio";
  }
  if (!$nbaños) {
    $errores[] = "El numero de baños es obligatorio";
  }
  if (!$nestacionamientos) {
    $errores[] = "El numero de estacionamientos es obligatorio";
  }
  if (!$idvendedor) {
    $errores[] = "Elige un vendedor";
  }


  if (empty($errores)) {
    $query = "INSERT INTO propiedades (titulo , precio, descripccion, habitaciones, wc, estacionamiento, vendedores_id) VALUES ('$titulo', '$precio', '$descripcion', '$nhabitaciones', '$nbaños', '$nestacionamientos', '$idvendedor')";
  } else {
    header('Content-Type: application/json');
    echo json_encode([
      'error' => true,
      'message' => $errores,
    ]);
    exit;
  }

  $resultado = mysqli_query($db, $query);
  header('Content-Type: application/json');
  echo json_encode([
    'error' => false,
    'message' => 'Consulta ejecutada con éxito',
  ]);
}
