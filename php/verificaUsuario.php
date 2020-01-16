<?php
include "conexion.php";

$nombreUsuario = $_REQUEST["nombre"];
$query = "SELECT * FROM usuario WHERE id_usuario = '$nombreUsuario'"; 

$resultado = $conexion->query($query);
if ($resultado->num_rows <= 0) {
    echo 'Usuario Inexistente';
} else {
    echo 'Usuario Existente';
}