<?php
session_start();
$code = $_POST["code"];
if(isset($_SESSION["code"])){
    if($_SESSION["code"] == $code){
        echo "success";
        $_SESSION["verified"] = true;
    }else{
        echo "The code you have entered is wrong, are you sure you are the owner of this account";
    }
}else{
    echo "You are unauthorise";
}
?>