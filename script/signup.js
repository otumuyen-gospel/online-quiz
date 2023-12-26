document.getElementById("signup").onclick = function(){
    signup();
}
window.onload = function(){
    var url = "../script/status.php";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = xhr.responseText;
                if(result == "logged"){
                    var account = document.getElementById("account");
                    account.setAttribute("href","account.php");
                    account.innerHTML = "Account";
                }
                
            } else {
                var result = xhr.statusText;
            }
        }
    };
    xhr.open("get",url, true);
    xhr.send(null);

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
function signup(){
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var actionText = document.getElementsByClassName("action-text")[0];
    var loader = startLoader();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = xhr.responseText;
                actionText.innerHTML = result;
                if(result.includes("success")){
                    window.location.href="login.html";
                }
                stopLoader(loader);
            } else {
                var result = xhr.statusText;
                actionText.innerHTML = result;
                stopLoader(loader);
            }
        }
    };
    xhr.open("post","../script/signup.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("email="+email+"&password="+password);
}