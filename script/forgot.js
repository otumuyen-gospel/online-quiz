document.getElementById("submit").onclick = function(){
    document.getElementById("submit").disabled = true;
    sendMail();
    document.getElementById("submit").disabled = false;
}

function sendMail(){
    var email = document.getElementsByName("email")[0].value;
    var actionText = document.getElementsByClassName("action-text")[0];
    var loader = startLoader();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = xhr.responseText;
                actionText.innerHTML = result;
                if(result.includes("success")){
                    window.location.href="../pages/verify.php?message=verify";
                }
                stopLoader(loader);
            } else {
                var result = xhr.statusText;
                actionText.innerHTML = result;
                stopLoader(loader);
            }
        }
    };
    xhr.open("post","../script/forgot.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("email="+email);
}


function startLoader(){
    var count = 1;
    var loader = document.getElementById("loader");
        loader.style.display = "block";
    var animation = setInterval(() => {
        loader.innerHTML += ".";
        count++;
        if(count > 3){
            loader.innerHTML = ".";
            count = 1;
        }
    }, 1500);
    return animation;
}
function stopLoader(id){
    clearInterval(id);
    var loader = document.getElementById("loader");
    loader.style.display = "none"
}