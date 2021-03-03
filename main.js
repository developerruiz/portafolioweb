let burgerMenu = document.getElementById('burger_menu');
let menuMovil = document.getElementById('menu_movil');
let contador = 0;
let icono = document.querySelector('.fas.fa-bars')

burgerMenu.addEventListener('click',function(){
    if(contador == 0 ){
        menuMovil.className = menuMovil.className + ' active'
        icono.classList.replace = ('fas fa-bars')
        icono.className = ('fas fa-times')
        icono.style.transform = "rotate(1deg)";
        contador = 1

    }else{
        menuMovil.classList.remove('active')
        menuMovil.className = ('menu-movil')
        icono.className = ('fas fa-bars')
        icono.style.transform = "rotate(180deg)";
        contador = 0
        
    }
})