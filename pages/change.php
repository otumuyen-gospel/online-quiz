<?php
session_start();
if(!$_GET["verified"] && !$_SESSION["verified"]){
    //send user to login page
    header("location:login.html");
    die();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <script src="../script/change.js" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../style/auth.css">
        <title>ONLINE QUIZ</title>
    </head>
    <body>
        <div id="header">
            <a href="../">Home</a>
            <a href="signup.html" id="account">Sign up</a>
        </div>
        <div id="auth-form">
            <h1>CHANGE YOUR PASSWORD</h1>
            <p class="action-text"></p>
            <h1 id="loader"></h1>
            <div class="auth-form-element">
                <span>Enter new password </span><br/>
                <input type="password" name="password">
            </div>
            <div class="auth-form-element">
                <span>Confirm password </span><br/>
                <input type="password" name="confirm">
            </div>
            <div class="auth-form-element">
                <button id="submit">CHANGE</button>
                <a href="login.html">Login Instead ?</a>
            </div>
        </div>
    </body>
</html>