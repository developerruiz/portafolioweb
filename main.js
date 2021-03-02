let burgerMenu = document.getElementById('burger_menu');
let menuMovil = document.getElementById('menu_movil');
let contador = 0;

burgerMenu.addEventListener('click',function(){
    if(contador == 0 ){
        menuMovil.className = menuMovil.className + ' active'
        contador = 1
    }else{
        menuMovil.classList.remove('active')
        menuMovil.className = ('menu-movil')
        contador = 0
    }
})