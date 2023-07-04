
const menuBtn = document.getElementById("menu_btn")
const nav = document.getElementById("nav")
const navCloseBtn = document.getElementById("nav_close_btn")
const cart = document.getElementById("cart")
const cartCloseBtn = document.getElementById("cart_close_btn")

menuBtn.addEventListener("click", ()=> {
    nav.style.display = "block"
})

navCloseBtn.addEventListener('click', ()=> {
    nav.style.display= "none"
})


    