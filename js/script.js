let hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
let navbarItems = document.getElementsByClassName("mobile-nav")[0];

hamburgerMenu.onclick = toggleMenu;

navbarItems.style.maxHeight = "0px";

function toggleMenu(){
    if(navbarItems.style.maxHeight == "0px"){
        navbarItems.style.maxHeight = "505px";
        hamburgerMenu.src = "images/icon-close.svg";
    }else{
        navbarItems.style.maxHeight = "0px";
        hamburgerMenu.src = "images/icon-hamburger.svg";
    }
}

