<?php
session_start();
if($_GET["message"] != "verify" && $_SESSION["message"] !="verify"){
    //send user to login page
    header("location:login.html");
    die();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <script src="../script/verify.js" defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
            <h1>CODE VERIFICATION</h1>
            <p class="action-text"></p>
            <h1 id="loader"></h1>
            <div class="auth-form-element">
                <span>Enter the code we sent to your email </span><br/>
                <input type="text" name="code">
            </div>
            <div class="auth-form-element">
                <button id="submit">VERIFY</button>
                <a href="Javascript:resend();">Re-send Code ?</a>
            </div>
        </div>
    </body>
</html>