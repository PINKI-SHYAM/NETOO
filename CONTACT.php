<?php

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "ranipinki8492@gmail.com";
    $headers = "from : ".$mailfrom;
    $txt = " you got a message".$name".\n\n".$message;

    mail($mailTo, $name, $txt, $headers);

    echo("message sent");
}
?>

