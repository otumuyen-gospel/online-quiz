<?php
include("processor.php");
$proc = new Processor();
$proc->initDb();
$current = $_POST["current"];
$password = $_POST["password"];
$confirm = $_POST["confirm"];
if($current != ""){
    if($password != "" && strlen(trim($password)) >= 8){
        if($confirm == $password){
            $proc->updatePassword($current, $password);
        }else{
            echo "please confirm password";
        }
    }else{
        echo "please enter your new password";
    }
}else{
    echo "please enter your current password";
}

?>