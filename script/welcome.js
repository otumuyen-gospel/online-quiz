window.onload = function(){
    var url = "script/status.php";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = xhr.responseText;
                if(result == "logged"){
                    var account = document.querySelectorAll("#header a")[0];
                    account.setAttribute("href","pages/account.php");
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