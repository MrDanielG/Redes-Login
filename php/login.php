<?php
include "conexion.php";

$nombreUsuario = $_GET["usernameInp"];
$contra = $_GET["passwordInp"];

$queryUsername = "SELECT id_usuario FROM usuario WHERE id_usuario = '$nombreUsuario'"; 
$queryPassword = "SELECT contra FROM usuario WHERE id_usuario = '$nombreUsuario'";

$resultUsername = $conexion->query($queryUsername);
$resultPassword = $conexion->query($queryPassword);

if ($resultUsername == $nombreUsuario) {
    if(password_verify($contra, $resultPassword)){
        header('Location: '. '../resources/intro.php');
    }
} else {
    header('Location: '. '../resources/intro.html');
}