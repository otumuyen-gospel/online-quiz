<?php
include("processor.php");
$proc = new Processor();
$proc->initDb();
$email = $_POST["email"];
$password = $_POST["password"];
$regex = "/^[\w\d!#$%&'*+-\/=?^`{|}~]+(\.[\w\d!#$%&'*+-\/=?^`{|}~]+)* ➥
@([a-z\d][-a-z\d]*[a-z\d]\.)+[a-z][-a-z\d]*[a-z]$/";
if(isset($email) && strlen(trim($email)) != 0){ //preg_match IS GIVEN PROBLEM
    if(isset($password) && strlen(trim($password)) >= 8){
        $proc->signup($email, $password);
    }else{
        echo "please enter a password of at least 8 characters";
    }
}else{
    echo "invalid email";
}

?>