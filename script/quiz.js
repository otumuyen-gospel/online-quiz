var Level = 1;
restart();
function disableHelp(index){
 var line = document.getElementById("line"+index);
 var cancel = document.getElementById("line-cancel"+index);
 cancel.style.display = "block";
 line.style.backgroundColor = "yellow";
 line.disabled = true;
}
function enableHelp(){
    var line = document.getElementById("line1");
    var cancel = document.getElementById("line-cancel1");
    cancel.style.display = "none";
    line.style.backgroundColor = "goldenrod";
    line.addEventListener('mouseover',()=>{
      line.style.backgroundColor = "yellow";
    });
    line.addEventListener('mouseout',()=>{
      line.style.backgroundColor = "goldenrod";
    });
    line.disabled = false;
    var line2 = document.getElementById("line2");
    var cancel2 = document.getElementById("line-cancel2");
    cancel2.style.display = "none";
    line2.style.backgroundColor = "goldenrod";
    line2.addEventListener('mouseover',()=>{
      line2.style.backgroundColor = "yellow";
    });
    line2.addEventListener('mouseout',()=>{
      line2.style.backgroundColor = "goldenrod";
    });
    line2.disabled = false;
    var line3 = document.getElementById("line3");
    var cancel3 = document.getElementById("line-cancel3");
    cancel3.style.display = "none";
    line3.style.backgroundColor = "goldenrod";
    line3.addEventListener('mouseover',()=>{
      line3.style.backgroundColor = "yellow";
    });
    line3.addEventListener('mouseout',()=>{
      line3.style.backgroundColor = "goldenrod";
    });
    line3.disabled = false;
}

function restart(){
    closeSidebar('scoreWindow');
    enableHelp();
    enableOption();
    //INITIALIZE QUIZ AND FETCH FIRST QUIZ
    startQuiz();
    resetLevelAnimation();
}
function closeApp(){
    window.location.href = "../";
}
function startQuiz(){
    var url = "../script/start.php";
    //SEND LEVEL = 1 AND ANSWER = "" TO REQUEST.PHP
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = JSON.parse(xhr.responseText);
                var question = document.querySelector("#question p");
                question.innerHTML = result[0]["question"];
                document.getElementById("option1").innerHTML = "A: "+result[0]["option1"];
                document.getElementById("option2").innerHTML = "B: "+result[0]["option2"];
                document.getElementById("option3").innerHTML = "C: "+result[0]["option3"];
                document.getElementById("option4").innerHTML = "D: "+result[0]["option4"];
            } else {
                var result = xhr.status;
            }
        }
    };
    xhr.open("get",url, true);
    xhr.send(null);
}
function nextQuiz(answer){
    //GRADE SCORE AND FETCH NEXT QUIZ
    var url = "../script/next.php?level="+encodeURIComponent(Level)
    +"&answer="+encodeURIComponent(answer)+"";
    //SEND LEVEL = 1 AND ANSWER = "" TO REQUEST.PHP
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = JSON.parse(xhr.responseText);
                var question = document.querySelector("#question p");
                question.innerHTML = result[0]["question"];
                document.getElementById("option1").innerHTML = "A: "+result[0]["option1"];
                document.getElementById("option2").innerHTML = "B: "+result[0]["option2"];
                document.getElementById("option3").innerHTML = "C: "+result[0]["option3"];
                document.getElementById("option4").innerHTML = "D: "+result[0]["option4"];
            } else {
                var result = xhr.status;
            }
        }
    };
    xhr.open("get",url, true);
    xhr.send(null);
    setLevel(answer);
}
function setLevel(answer){
  if(Level < 10){
    Level += 1;
    document.getElementById("lvl10").style.backgroundColor = "goldenrod";
    document.getElementById("lvl10").style.color = "#fff";
    document.getElementById("lvl10").style.backgroundColor = "goldenrod";
    document.getElementById("lvl10").style.color = "#fff";
    document.getElementById("lvl10").style.backgroundColor = "goldenrod";
    document.getElementById("lvl10").style.color = "#fff";
    document.getElementById("lvl10").style.backgroundColor = "goldenrod";
    document.getElementById("lvl10").style.color = "#fff";
    document.getElementById("lvl9").style.backgroundColor = "goldenrod";
    document.getElementById("lvl9").style.color = "#fff";
    document.getElementById("lvl8").style.backgroundColor = "goldenrod";
    document.getElementById("lvl8").style.color = "#fff";
    document.getElementById("lvl7").style.backgroundColor = "goldenrod";
    document.getElementById("lvl7").style.color = "#fff";
    document.getElementById("lvl6").style.backgroundColor = "goldenrod";
    document.getElementById("lvl6").style.color = "#fff";
    document.getElementById("lvl5").style.backgroundColor = "goldenrod";
    document.getElementById("lvl5").style.color = "#fff";
    document.getElementById("lvl4").style.backgroundColor = "goldenrod";
    document.getElementById("lvl4").style.color = "#fff";
    document.getElementById("lvl3").style.backgroundColor = "goldenrod";
    document.getElementById("lvl3").style.color = "#fff";
    document.getElementById("lvl2").style.backgroundColor = "goldenrod";
    document.getElementById("lvl2").style.color = "#fff";
    document.getElementById("lvl1").style.backgroundColor = "goldenrod";
    document.getElementById("lvl1").style.color = "#fff";
    document.getElementById("lvl"+Level).style.backgroundColor = "yellow";
    document.getElementById("lvl"+Level).style.color = "#555";
  }else{
    //grade and show user performance
    score(answer);
  }

}
function resetLevel(Level){
    //reset previous level animation
    document.getElementById("lvl10").style.backgroundColor = "goldenrod";
    document.getElementById("lvl10").style.color = "#fff";
    document.getElementById("lvl10").style.backgroundColor = "goldenrod";
    document.getElementById("lvl10").style.color = "#fff";
    document.getElementById("lvl10").style.backgroundColor = "goldenrod";
    document.getElementById("lvl10").style.color = "#fff";
    document.getElementById("lvl10").style.backgroundColor = "goldenrod";
    document.getElementById("lvl10").style.color = "#fff";
    document.getElementById("lvl9").style.backgroundColor = "goldenrod";
    document.getElementById("lvl9").style.color = "#fff";
    document.getElementById("lvl8").style.backgroundColor = "goldenrod";
    document.getElementById("lvl8").style.color = "#fff";
    document.getElementById("lvl7").style.backgroundColor = "goldenrod";
    document.getElementById("lvl7").style.color = "#fff";
    document.getElementById("lvl6").style.backgroundColor = "goldenrod";
    document.getElementById("lvl6").style.color = "#fff";
    document.getElementById("lvl5").style.backgroundColor = "goldenrod";
    document.getElementById("lvl5").style.color = "#fff";
    document.getElementById("lvl4").style.backgroundColor = "goldenrod";
    document.getElementById("lvl4").style.color = "#fff";
    document.getElementById("lvl3").style.backgroundColor = "goldenrod";
    document.getElementById("lvl3").style.color = "#fff";
    document.getElementById("lvl2").style.backgroundColor = "goldenrod";
    document.getElementById("lvl2").style.color = "#fff";
    document.getElementById("lvl1").style.backgroundColor = "goldenrod";
    document.getElementById("lvl1").style.color = "#fff";

    //set current level animation
    document.getElementById("lvl"+Level).style.backgroundColor = "yellow";
    document.getElementById("lvl"+Level).style.color = "#555";
}
function resetLevelAnimation(){
    // FROM LEVEL 10 TO 1
    var intervalId = setInterval(() => {
       if(Level <= 1){
         clearInterval(intervalId);
        resetLevel(Level);
       }else{
        Level--; 
        resetLevel(Level);
       }
    }, 50);
}
function processOption(id){
    disableOption(id);
    var answer = document.getElementById(id).innerHTML.split(":")[1];
    nextQuiz(answer);
    enableOption();
}

function disableOption(id){
    document.getElementById("option1").disabled = true;
    document.getElementById("option2").disabled = true;
    document.getElementById("option3").disabled = true;
    document.getElementById("option4").disabled = true;
    document.getElementById(id).style.backgroundColor = "yellow";
    document.getElementById(id).style.color = "#555";
}
function enableOption(){
    var button = document.getElementById("option1");
    var button2 = document.getElementById("option2");
    var button3 = document.getElementById("option3");
    var button4 = document.getElementById("option4");
    button.disabled = false;
    button.style.backgroundColor = "goldenrod";
    button.style.color = "#fff";
    button.style.display = "block";
    button.addEventListener('mouseover',()=>{
        button.style.backgroundColor = "yellow";
        button.style.color = "#555";
    });
    button.addEventListener('mouseout',()=>{
         button.style.backgroundColor = "goldenrod";
         button.style.color = "#fff";
     });
    button2.disabled = false;
    button2.style.backgroundColor = "goldenrod";
    button2.style.color = "#fff";
    button2.style.display = "block";
    button2.addEventListener('mouseover',()=>{
        button2.style.backgroundColor = "yellow";
        button2.style.color = "#555";
    });
    button2.addEventListener('mouseout',()=>{
         button2.style.backgroundColor = "goldenrod";
         button2.style.color = "#fff";
     });
    button3.disabled = false;
    button3.style.backgroundColor = "goldenrod";
    button3.style.display = "block";
    button3.style.color = "#fff";
    button3.addEventListener('mouseover',()=>{
        button3.style.backgroundColor = "yellow";
        button3.style.color = "#555";
    });
    button3.addEventListener('mouseout',()=>{
         button3.style.backgroundColor = "goldenrod";
         button3.style.color = "#fff";
    });
    button4.disabled = false;
    button4.style.backgroundColor = "goldenrod";
    button4.style.display = "block";
    button4.style.color = "#fff";
    button4.addEventListener('mouseover',()=>{
        button4.style.backgroundColor = "yellow";
        button4.style.color = "#555";
    });
    button4.addEventListener('mouseout',()=>{
         button4.style.backgroundColor = "goldenrod";
         button4.style.color = "#fff";
     });
}
function audience(index,value){
 disableHelp(index);
 openSidebar(value);
 var votes = voteSimulation();
 setBarChart(votes[0], votes[1], votes[2], votes[3]);
}
function voteSimulation(){
    var votes = [];
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var voters = 100;
    //simulate random votes for voters
    for(var i = 1; i <= voters; i++){
        switch(parseInt(Math.random() * 10) % 4){
            case 0:
                a += 1; //a vote for a A
                break;
            case 1:
                b += 1; //a vote for a B
                break;
            case 2:
                c += 1; //a vote for a C
                break;
            case 3:
                d += 1; //a vote for a D
                break;
        }
    }
    a = (a / voters) * 100; // percentage votes for option A
    b = (b / voters) * 100; // percentage votes for option B
    c = (c / voters) * 100; // percentage votes for option C
    d = (d / voters) * 100; // percentage votes for option D
    votes.push(Math.round(a),Math.round(b),Math.round(c),Math.round(d))
    return votes;
}
function score(answer){
    //GRADE SCORE AND FETCH NEXT QUIZ
    var url = "../script/end.php?level="+encodeURIComponent(Level)
    +"&answer="+encodeURIComponent(answer);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = xhr.responseText;
                document.getElementById("score").innerHTML = result+"%";
            } else {
                var result = xhr.statusText;
            }
        }
    };
    xhr.open("get",url, true);
    xhr.send(null);
    openSidebar("scoreWindow");
}
function call(index,value){
 disableHelp(index);
 openSidebar(value);
 var widget1 = document.getElementsByClassName("widget")[0];
 widget1.innerHTML = "";
 callSimulation(widget1);
}
function callSimulation(widget1){
    var count = 1;
    var chats = ["YOU : calling a friend...","FRIEND : hello! guy", "YOU : i need the answer to the question on the screen",
"YOU : how sure are you?"];
var answer = [];
    if(document.getElementById("option1").style.display !== "none"){
        answer.push("FRIEND : i think the answer is A");
    }
    if(document.getElementById("option2").style.display !== "none"){
        answer.push("FRIEND : i think the answer is B");
    }
    if(document.getElementById("option3").style.display !== "none"){
        answer.push("FRIEND : i think the answer is C");
    }
    if(document.getElementById("option4").style.display !== "none"){
        answer.push("FRIEND : i think the answer is D");
    }
    var sure = ["FRIEND : 20%", "FRIEND : 40%", "FRIEND : 60%", "FRIEND : 80%", "FRIEND : 100%"]
   var intervalId = setInterval(()=>{
        if(count > 6){
            clearInterval(intervalId);
        }else if(count == 1){
            widget1.innerHTML += chats[0]+"<br/>";
        }else if(count == 2){
            widget1.innerHTML += chats[1]+"<br/>";
        }else if(count == 3){
            widget1.innerHTML += chats[2]+"<br/>";
        }else if(count == 4){
            widget1.innerHTML += answer[(parseInt(Math.random() * 10) % answer.length)]+"<br/>";
        }else if(count == 5){
            widget1.innerHTML += chats[3]+"<br/>";
        }else if(count == 6){
            widget1.innerHTML += sure[(parseInt(Math.random() * 10) % 5)]+"<br/>";
        }
        count += 1;
    },1500);
}
function closeSidebar(value){
    document.getElementById(value).style.display = "none";
}
function openSidebar(value){
    document.getElementById(value).style.display = "block";
}

function fiftyFifty(index){
     disableHelp(index);
     var xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function(){
         if (xhr.readyState == 4){
             if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                 var result = xhr.responseText;
                if(document.getElementById("option1").innerHTML.split(":")[1].trim() == result){
                    //REMOVE TWO OPTION
                   document.getElementById("option2").style.display = "none";
                   document.getElementById("option3").style.display = "none";
                }else if(document.getElementById("option2").innerHTML.split(":")[1].trim() == result){
                    //REMOVE TWO OPTION
                   document.getElementById("option3").style.display = "none";
                   document.getElementById("option4").style.display = "none";
                }else if(document.getElementById("option3").innerHTML.split(":")[1].trim() == result){
                    //REMOVE TWO OPTION
                   document.getElementById("option4").style.display = "none";
                   document.getElementById("option1").style.display = "none";
                } else if(document.getElementById("option4").innerHTML.split(":")[1].trim() == result){
                    //REMOVE TWO OPTION
                   document.getElementById("option1").style.display = "none";
                   document.getElementById("option2").style.display = "none";
                } 
            } else {
                 var result = xhr.status;
            }
         }
     };
     xhr.open("get","../script/correct.php", true);
     xhr.send(null);
    
}
function getRandom(){
    /*
     GENERATE RANDOM NUMBER FROM 1-4; 1-A,2-B,3-C,4-D
    */
    return 1 + (parseInt(Math.random() * 10) % 4);
}

function setBarChart(height1, height2, height3,height4){
    var bar1 = document.getElementsByClassName("bar1")[0];
    var bar2 = document.getElementsByClassName("bar2")[0];
    var bar3 = document.getElementsByClassName("bar3")[0];
    var bar4 = document.getElementsByClassName("bar4")[0];

    bar1.style.height = height1+"%";
    bar1.style.marginTop = (100 - height1)+"%";
    bar1.innerHTML = height1+"%";

    bar2.style.height = height2+"%";
    bar2.style.marginTop = (100 - height2)+"%";
    bar2.innerHTML = height2+"%";

    bar3.style.height = height3+"%";
    bar3.style.marginTop = (100 - height3)+"%";
    bar3.innerHTML = height3+"%";

    bar4.style.height = height4+"%";
    bar4.style.marginTop = (100 - height4)+"%";
    bar4.innerHTML = height4+"%";

}

