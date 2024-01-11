<?php
// Recibir el JSON desde la URL
$miJSON = $_GET['x'];

// Decodificar el JSON a un objeto PHP
$miObjetoPHP = json_decode($miJSON);

// Acceder a las propiedades del objeto
$nombre = $miObjetoPHP->nombre;
$apellidos = $miObjetoPHP->apellidos;
$edad = $miObjetoPHP->edad;
$curso = $miObjetoPHP->curso;
$asignatura = $miObjetoPHP->asignatura;
$ciudad = $miObjetoPHP->ciudad;
?>
