document.getElementsByTagName("button")[0].onclick = function(){
    document.getElementsByTagName("button")[0].disabled = true;
    updatePassword();
    document.getElementsByTagName("button")[0].disabled = false;
}
document.getElementsByTagName("button")[1].onclick = function(){
    document.getElementsByTagName("button")[1].disabled = true;
    updateEmail();
    document.getElementsByTagName("button")[1].disabled = false;
}
document.getElementsByTagName("button")[2].onclick = function(){
    document.getElementsByTagName("button")[2].disabled = true;
    deleteUser();
    document.getElementsByTagName("button")[2].disabled = false;
}

function updatePassword(){
    var confirm = document.getElementsByName("confirm")[0].value;
    var password = document.getElementsByName("password")[0].value;
    var current = document.getElementsByName("current")[0].value;
    var actionText = document.getElementsByClassName("action-text")[0];
    var loader = startLoader(0);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = xhr.responseText;
                stopLoader(loader,0);
                actionText.innerHTML = result;
            } else {
                var result = xhr.statusText;
                actionText.innerHTML = result;
                stopLoader(loader,0);
            }
        }
    };
    xhr.open("post","../script/updatePassword.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("confirm="+confirm+"&password="+password+"&current="+current);
}

function updateEmail(){
    var email = document.getElementsByName("email")[0].value;
    var actionText = document.getElementsByClassName("action-text")[1];
    var loader = startLoader(1);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = xhr.responseText;
                stopLoader(loader,1);
                actionText.innerHTML = result;
                if(result.includes("successful")){
                    window.location.reload();
                }
            } else {
                var result = xhr.statusText;
                actionText.innerHTML = result;
                stopLoader(loader,1);
            }
        }
    };
    xhr.open("post","../script/updateEmail.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("email="+email);
}

function deleteUser(){
    var actionText = document.getElementsByClassName("action-text")[2];
    var loader = startLoader(1);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = xhr.responseText;
                stopLoader(loader,2);
                if(result == "deleted"){
                    window.location.href = "../";
                }
            } else {
                var result = xhr.statusText;
                actionText.innerHTML = result;
                stopLoader(loader,2);
            }
        }
    };
    xhr.open("post","../script/deleteUser.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(null);
}


function startLoader(index){
    var count = 1;
    var loader = document.getElementsByClassName("loader")[index];
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
function stopLoader(id, index){
    clearInterval(id);
    var loader = document.getElementsByClassName("loader")[index];
    loader.style.display = "none"
}