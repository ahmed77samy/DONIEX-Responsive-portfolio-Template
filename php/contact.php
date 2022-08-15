<?php

//Taking all values
$name 		= $_POST['name'];
$email 		= $_POST['email'];
$phone 		= $_POST['phone'];
$comments 	= $_POST['comments'];
$output 	= "Name: ".$name."\n\nEmail: ".$email."\n\nPhone: ".$phone "\n\ncomments: ".$comments;

$to 		= 'ahmed0salma.sa@gmail.com';
$headers	= 'FROM: "'.$email.'"';

$send		= mail($to, $name, $output."\n\n***This message has been sent from Dubai", $headers);
?>