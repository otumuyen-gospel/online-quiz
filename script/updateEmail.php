<?php
include("processor.php");
$proc = new Processor();
$proc->initDb();
$email = $_POST["email"];
$regex = "/^[\w\d!#$%&'*+-\/=?^`{|}~]+(\.[\w\d!#$%&'*+-\/=?^`{|}~]+)* ➥
@([a-z\d][-a-z\d]*[a-z\d]\.)+[a-z][-a-z\d]*[a-z]$/";
if(isset($email) && $email != ""){
    $proc->updateEmail($email);
}else{
    echo "please enter new valid email";
}

?>