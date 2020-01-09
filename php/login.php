<?php
include "conexion.php";
$nombreUsuario = $_GET["usernameInp"];
$contra = $_GET["passwordInp"];
$query = "SELECT * FROM usuario WHERE id_usuario = '$nombreUsuario' and contra = '$contra'"; 

$resultado = $conexion->query($query);
if ($resultado->num_rows <= 0) {
    header('Location: '. '../index.html');
} else {
    header('Location: '. '../resources/intro.html');
}