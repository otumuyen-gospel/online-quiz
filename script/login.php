<?php
include("processor.php");
$proc = new Processor();
$proc->initDb();
$email = $_POST["email"];
$password = $_POST["password"];
if(isset($email) && strlen(trim($email)) != 0){ 
    if(isset($password) && strlen(trim($password)) >= 8){
        $proc->login($email, $password);
    }else{
        echo "please enter your password";
    }
}else{
    echo "please enter your email";
}

?>