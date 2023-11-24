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