<?php
include("processor.php");
$proc = new Processor();
$proc->initDb();
$email = $_POST["email"];
$password = $_POST["password"];
if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    if(isset($password) && strlen(trim($password)) >= 8){
        $proc->signup($email, $password);
    }else{
        echo "please enter a password of at least 8 characters";
    }
}else{
    echo "invalid email";
}

?>