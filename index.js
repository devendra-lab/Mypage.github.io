// JS for Preloader
let body = document.body
let preload = document.querySelector('#preloader')
body.onload = () => {
    preload.style.display = "none"
}
// Jquery for Nav-bar
$(document).ready(() => {
    $('#nav').click(() => {
        $('.nav-bar').toggleClass('active')
        $('#nav').toggleClass('fa-times')
    })
})
