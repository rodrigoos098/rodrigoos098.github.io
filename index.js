function aboutShow() {
    home = document.getElementById("home");
    about = document.getElementById("about");
    home.style.opacity = "0";
    home.style.zIndex = "-1";
    about.style.opacity = "1";
    about.style.zIndex = "1";
}

function aboutHide() {
    home = document.getElementById("home");
    about = document.getElementById("about");
    home.style.opacity = "1";
    home.style.zIndex = "1";
    about.style.opacity = "0";
    about.style.zIndex = "-1";
}

function trocarFoto(foto) {
    var foto1 = document.getElementById("foto1");
    var foto2 = document.getElementById("foto2");

    if (foto == 1) {
        foto1.style.opacity = 1;
        foto2.style.opacity = 0;
    } else { 
        foto1.style.opacity = 0;
        foto2.style.opacity = 1;
    }
}