
//************** NAVBAR AMINATE ***************/

const menuHamburger = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".nav-links")

menuHamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle("mobile-menu")
})

//**************** AMINATE HAMBURGER **********/

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen =true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen =false;
    }
});

//************** FIN AMINATE HAMBURGER **********/


//**************  AMINATE LINKS **********/
const spanContainers = document.querySelectorAll('.link div');

spanContainers.forEach(item => {
    
    const letters = item.children[0].
    textContent.split('');
    item.innerHTML = "";
    letters.forEach((el, index) => {
        item.innerHTML += `<span style="transition-delay: ${0.07 * index}s">${el} </span>`
    })
})
//************** FIN AMINATE LINKS **********/

