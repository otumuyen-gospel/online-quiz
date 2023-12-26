
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