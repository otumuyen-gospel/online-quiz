<?php
    session_start();
    if(!isset($_SESSION["userid"])){
        //send user to login page
        header("location:login.html");
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <script src="../script/statistics.js" defer></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../style/statistics.css">
        <title>ONLINE QUIZ</title>
    </head>
    <body>
        <div id="header">
            <div class="help">
                <h1 id="username"><?php echo $_SESSION['username'] ?></h1>
            </div>
            <div class="links">
                <a href="quiz.php">Quiz</a>
                <a href="account.php">Account</a>
                 <a href="../script/logout.php">Log out</a>
            </div>
            <div class="cb"></div>
        </div>
        <div class="auth-form">
            <p class="action-text"></p>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>DATE</th>
                    <th>PERCENTAGE SCORE</th>
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            <div class="small-btn">
                <button id="next">Next</button>
                <button id="prev">Prev</button>
            </div>
        </div>
    </body>
</html>