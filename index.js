// JS for Preloader
function myFunction() {
    document.getElementById('preloader').style.display = "none"
}

// JS for Nav-bar
function myFunction1() {
    document.getElementById('u-list').style.display = "flex"
    document.getElementById('menu-bar').style.display = "none"
    document.getElementById('close').style.display = "block"
    document.getElementById('checkbox').style.display = "flex"
}
function myFunction2() {
    document.getElementById('u-list').style.display = "none"
    document.getElementById('menu-bar').style.display = "block"
    document.getElementById('checkbox').style.display = "none"
    document.getElementById('close').style.display = "none"
}

// JS for Dark Mode 
function myDark() {
    document.body.classList.toggle("dark-color")
    document.getElementById("dark").style.display = "none"
    document.getElementById("light").style.display = "block"
}
function myLight() {
    document.body.classList.toggle("dark-color")
    document.getElementById("dark").style.display = "block"
    document.getElementById("light").style.display = "none"
}
function myCheck(){
    document.body.classList.toggle("dark-color")
}