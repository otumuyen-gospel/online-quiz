<?php
include("processor.php");
$proc = new Processor();
$proc->initDb();
$email = $_POST["email"];
if(isset($_SESSION["email"]) && isset($_SESSION["code"])){
    $email = $_SESSION["email"];
}
if(filter_var($email, FILTER_VALIDATE_EMAIL)){
    $code =$proc->generateCode();

    if($proc->sendMail($email, $code) && $proc->confirmUser($email)){
        $_SESSION["code"] = $code;
        $_SESSION["email"] = $email;
        $_SESSION["message"] = "verify";
        echo "success";
    }else{
        echo "unable to communicate with email server, ensure your username is correct";
    }
}else{
    echo "invalid email";
}

?>