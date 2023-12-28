document.getElementById("submit").onclick = function(){
    change();
}

function change(){
    document.getElementById("submit").disabled = true;
    var password = document.getElementsByName("password")[0].value;
    var confirm = document.getElementsByName("confirm")[0].value;
    var actionText = document.getElementsByClassName("action-text")[0];
    var loader = startLoader();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = xhr.responseText;
                actionText.innerHTML = result;
                stopLoader(loader);
                document.getElementById("submit").disabled = false;
            } else {
                var result = xhr.statusText;
                actionText.innerHTML = result;
                stopLoader(loader);
                document.getElementById("submit").disabled = false;
            }
        }
    };
    xhr.open("post","../script/change.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send("password="+password+"&confirm="+confirm);
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