let burgerMenu = document.getElementById('burger_menu');
let menuMovil = document.getElementById('menu_movil');
let icono = document.querySelector('.fas.fa-bars')
let contador = 0;
let ubicacionPrincipal  = window.pageYOffset;

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


window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        
        document.getElementById('main-menu').style.top = '0';
        document.getElementById('main-menu').style.transition = '.2s ease-in';

        
    }
    else{
        
        document.getElementById('main-menu').style.top = '-120px';
        document.getElementById('main-menu').style.transition = '.2s ease-in';

    }
    ubicacionPrincipal = Desplazamiento_Actual;
}

