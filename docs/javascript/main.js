
function disableScrolling(){
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){
        window.scrollTo(x, y);
    };
}

function enableScrolling(){
    window.onscroll=function(){};
}

function abrirMenu(){
    document.getElementById("menu").style.right = "0";
    document.getElementById("menu").style.transition = "all .2s ease";
    disableScrolling();
}

function fecharMenu(){
    document.getElementById("menu").style.right = "-101%";
    document.getElementById("menu").style.transition = "all .2s ease";
    enableScrolling();
}