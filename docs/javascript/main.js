
function abrirMenu(){
    document.getElementById("menu").style.left = "0";
    document.getElementById("menu").style.transition = "all .2s linear";
}

function fecharMenu(){
    document.getElementById("menu").style.left = "-100%";
    document.getElementById("menu").style.transition = "all .2s linear";
}