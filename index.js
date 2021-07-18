// JS for Preloader
let preloader = document.getElementById('preloader')
function myFunction(){
    preloader.style.display = "none"
}

// JS for Nav-bar
var ulist = document.getElementById('u-list')
var menubar = document.getElementById('menu-bar')
var close = document.getElementById('close')
function myFunction1(){
    ulist.style.display="flex"
    menubar.style.display="none"
    close.style.display="block"
}
function myFunction2(){
    ulist.style.display="none"
    menubar.style.display="block"
    close.style.display="none"
}