<?php

$destinatario = 'ivanrur95@hotmail.com';
// esto es al correo al que se enviara el mensaje

$nombre = $_POST['nombre'];
$mensaje = $_POST['mensaje'];
$email = $_POST['email'];

$header = "Portafolio";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . "\nEmail: " . $email;

mail($destinatario, $mensajeCompleto, $header );
echo "<script>alert('correo enviado exitosamente')</script>";
echo "<script> setTimeout(\"location.href='index.html'\",1000)</script>";


?> 