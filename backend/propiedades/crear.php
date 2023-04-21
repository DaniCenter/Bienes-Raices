<?php
require "../funciones.php";
$errores = [];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $db = conectarDB();

  $titulo = mysqli_real_escape_string($db, $_POST["tituloPropiedad"]);
  $precio = mysqli_real_escape_string($db, $_POST["precioPropiedad"]);
  $descripcion = mysqli_real_escape_string($db, $_POST["descripcion"]);
  $img = mysqli_real_escape_string($db, $_POST["imgPropiedad"]);
  $nhabitaciones = mysqli_real_escape_string($db, $_POST["nHabitaciones"]);
  $nbaños = mysqli_real_escape_string($db, $_POST["nBaños"]);
  $nestacionamientos = mysqli_real_escape_string($db, $_POST["nEstacionamientos"]);
  $idvendedor = mysqli_real_escape_string($db, $_POST["idVendedor"]);
  $creado = date("Y-m-d");
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
    $query = "INSERT INTO propiedades (titulo , precio, descripccion, habitaciones, wc, estacionamiento, creado, vendedores_id) VALUES ('$titulo', '$precio', '$descripcion', '$nhabitaciones', '$nbaños', '$nestacionamientos','$creado' , '$idvendedor')";
  } else {
    header('Content-Type: application/json');
    echo json_encode([
      'error' => true,
      'message' => $errores,
    ]);
    mysqli_close($db);
    exit;
  }

  $resultado = mysqli_query($db, $query);
  header('Content-Type: application/json');
  echo json_encode([
    'error' => false,
    'message' => 'Consulta ejecutada con éxito',
  ]);
  mysqli_close($db);
}
