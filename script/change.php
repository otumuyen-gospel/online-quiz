<?php
include("processor.php");
$proc = new Processor();
$proc->initDb();
$confirm = $_POST["confirm"];
$password = $_POST["password"];
if(isset($password) && strlen(trim($password)) >= 8){
    if($confirm == $password){
        $proc->changePassword($password);
    }else{
        echo "please confirm your new password";
    }
}else{
    echo "please enter your new password";
}


?>