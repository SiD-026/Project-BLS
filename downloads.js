var menu = document.getElementById('menu')
var nav = document.getElementById('nav')
var exit = document.getElementById('exit')
console.log(nav)
menu.addEventListener('click' , () => {
   nav.classList.toggle('navcon')
})
exit.addEventListener('click' , () => {
    nav.classList.toggle('navcon')
 })
 