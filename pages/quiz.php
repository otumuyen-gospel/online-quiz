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
        <script src="../script/quiz.js" defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../style/quiz.css">
        <title>ONLINE QUIZ</title>
    </head>
    <body>
        <div id="header">
            <div class="help">
                <button id="line1">
                    <img src="../assets/audience.svg">
                    <h1 id="line-cancel1">X</h1>
                </button>
                <button id="line2" onclick="call(2, 'callWindow');">
                    <img src="../assets/call.svg">
                    <h1 id="line-cancel2">X</h1>
                </button>
                <button id="line3" onclick="fiftyFifty(3);">
                    <span>50:50</span>
                    <h1 id="line-cancel3">X</h1>
                </button>
            </div>
            <div class="links">
                <a href="account.php">Account</a>
                <a href="statistics.php">Statistics</a>
                 <a href="../script/logout.php">Log out</a>
            </div>
            <div class="cb"></div>
        </div>
        <div id="level">
            <span class="circle">1</span>
            <span class="circle">2</span>
            <span class="circle">3</span>
            <span class="circle">4</span>
            <span class="circle">5</span>
            <span class="circle">6</span>
            <span class="circle">7</span>
            <span class="circle">8</span>
            <span class="circle">9</span>
            <span class="circle">10</span>
        </div>
        <div class="cb"></div>
        <div id="question">
            General online quiz is drawn from all works of life. Test your ability now. 
                to save your score you need to create an account first.
        </div>
        <div id="options">
            <button id="option1">optionA</button>
            <button id="option2">optionB</button>
            <button id="option3">optionC</button>
            <button id="option4">optionD</buttton>
        </div>
        <div id="audienceWindow">
            <div class="sidebar">
                <div class="bar-chart">
                    <div class="bar1">
                        100%
                    </div>
                    <div class="bar2">
                        75%
                    </div>
                    <div class="bar3">
                        50%
                    </div>
                    <div class="bar4">
                        25%
                    </div>
                    
                </div>
                <div class="label">
                    <span>A</span>
                    <span>B</span>
                    <span>C</span>
                    <span>D</span>
                </div>
                <div class="close">
                    <button class="close-btn">close</button>
                </div>
            </div>
        </div>
        <div id="scoreWindow">
            <div class="sidebar">
                <div class="widget">
                    <h1>YOUR OVERALL PERFORMANCE</h1>
                    <h2 id="score">70%</h2>
                </div>
                <div class="close">
                    <button class="close-btn">logout</button><br/>
                    <button id="restart-btn">restart</button>
                </div>
            </div>
        </div>
        <div id="callWindow">
            <div class="sidebar">
                <div class="widget">
                  
                </div>
                <div class="close">
                    <button class="close-btn">close</button><br/>
                </div>
            </div>
        </div>
    </body>
</html>