<?php
function conectarDB()
{
  $db = mysqli_connect("localhost", "root", "password", "bienes-raices_crud", 3306);
  if (!$db) {
    exit();
  }

  return $db;
}
