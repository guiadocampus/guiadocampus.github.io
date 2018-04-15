
function abrirMenu(){
    document.getElementById("menu").style.right = "0";
    document.getElementById("menu").style.transition = "all .2s linear";
}

function fecharMenu(){
    document.getElementById("menu").style.right = "-100%";
    document.getElementById("menu").style.transition = "all .2s linear";
}