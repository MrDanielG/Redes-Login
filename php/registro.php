<?php
include "conexion.php";

$newUsername = $_GET["newUsername"];
$contra = $_GET["newPassword"];

$hash = password_hash($contra, PASSWORD_DEFAULT, ['cost' => 10]);

$query = "INSERT INTO usuario VALUES('$newUsername', '$hash')"; 

if ($conexion->query($query) === TRUE) {
    echo "Usuario Registrado Correctamente";
} else {
    echo "Error: " . $query . "<br>" . $conexion->error;
}