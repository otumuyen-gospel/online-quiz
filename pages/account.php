<?php
    session_start();
    if(!isset($_SESSION["userid"])){
        //send user to login page
        header("location:login.html");
        die();
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <script src="../script/account.js" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../style/account.css">
        <title>ONLINE QUIZ</title>
    </head>
    <body>
        <div id="header">
            <div class="help">
                <h1 id="username"><?php echo $_SESSION['username'] ?></h1>
            </div>
            <div class="links">
                <a href="quiz.php">Quiz</a>
                <a href="statistics.php">Statistics</a>
                 <a href="../script/logout.php">Log out</a>
            </div>
            <div class="cb"></div>
        </div>
        <div class="auth-form">
            <h1>CHANGE YOUR PASSWORD</h1>
            <p class="action-text"></p>
            <h1 class="loader"></h1>
            <div class="auth-form-element">
                <span>Enter current password </span><br/>
                <input type="password" name="current">
            </div>
            <div class="auth-form-element">
                <span>Enter new password </span><br/>
                <input type="password" name="password">
            </div>
            <div class="auth-form-element">
                <span>Confirm new password </span><br/>
                <input type="password" name="confirm">
            </div>
            <div class="auth-form-element">
                <button>CHANGE</button>
            </div>
        </div>

        <div class="auth-form">
            <h1>CHANGE YOUR EMAIL</h1>
            <p class="action-text"></p>
            <h1 class="loader"></h1>
            <div class="auth-form-element">
                <span>Enter new email</span><br/>
                <input type="text" name="email">
            </div>
            <div class="auth-form-element">
                <button>CHANGE</button>
            </div>
        </div>

        <div class="auth-form">
            <h1>DELETE THIS ACCOUNT</h1>
            <p class="action-text">Note : this action will completely destroy your account.
                you will no longer have access to your account
            </p>
            <h1 class="loader"></h1>
            <div class="auth-form-element">
                <button>DELETE ACCOUNT</button>
            </div>
        </div>
    </body>
</html>