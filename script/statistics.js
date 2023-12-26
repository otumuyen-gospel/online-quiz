window.onload = function(){
    next();
}

document.getElementById("next").onclick = function(){
    next();
}
document.getElementById("prev").onclick = function(){
    prev();
}

function prev(){
    var url = "../script/prevstat.php";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = JSON.parse(xhr.responseText);
                if(result.length != 0){
                    var tbody = document.getElementsByTagName("tbody")[0];
                    tbody.innerHTML = "";
                    for(var i = 0; i < result.length; i++){
                        var row = appendTableRow(result[i]["id"],result[i]["date"],
                        result[i]["score"]);
                        tbody.appendChild(row);
                    }
                }
            } else {
                var result = xhr.statusText;
                window.alert(result);
            }
        }
    };
    xhr.open("get",url, true);
    xhr.send(null);
}

function next(){
    var url = "../script/nextstat.php";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                var result = JSON.parse(xhr.responseText);
                if(result.length != 0){
                    var tbody = document.getElementsByTagName("tbody")[0];
                    tbody.innerHTML = "";
                    for(var i = 0; i < result.length; i++){
                        var row = appendTableRow(result[i]["id"],result[i]["date"],
                        result[i]["score"]);
                        tbody.appendChild(row);
                    }
                }
            } else {
                var result = xhr.statusText;
            }
        }
    };
    xhr.open("get",url, true);
    xhr.send(null);
}

function appendTableRow(id, date, score){
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = id;
    var td2 = document.createElement("td");
    td2.innerHTML = date;
    var td3 = document.createElement("td");
    td3.innerHTML = score;
    row.appendChild(td1); row.appendChild(td2); row.appendChild(td3);
    return row;
}