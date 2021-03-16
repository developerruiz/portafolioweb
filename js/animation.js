window.addEventListener('scroll', function () {
    
    let sectionPerfil = document.getElementById('perfil');
    let posicionObj1 = sectionPerfil.getBoundingClientRect().top;

    let habilidades = document.getElementById('habilidades');
    let posicionObj2 = habilidades.getBoundingClientRect().top;

    let iconoHabilidad = document.getElementById('aptitudes')
    let posicionObj3 = iconoHabilidad.getBoundingClientRect().top;
    

    let tamañoPantalla = window.innerHeight / 2;

    if (posicionObj1< tamañoPantalla) {
        sectionPerfil.style.animation = 'fadeUp .5s ease-out'
       
        let seccionPerfil = document.querySelector('.perfil')
        seccionPerfil.classList = ('perfil visible')
        
    }
    if (posicionObj2< tamañoPantalla) {
        habilidades.style.animation = 'fadeIn 2s ease-out'

        let seccionhabilidad = document.querySelector('.habilidades')
        seccionhabilidad.classList = ('habilidades visible')
    }
    
    if (posicionObj3< tamañoPantalla) {
        iconoHabilidad.style.animation = 'fadeUp .5s ease-out'
       
        let seccionAptitud = document.querySelector('.aptitudes')
        seccionAptitud.classList = ('aptitudes visible')
        
    }

})

// for (let i = 0; i < iconoAp.length; i++) {
//     iconoAp[i].addEventListener('mouseover', () => {
//         console.log('estoy pasando por el icono')
//     })
    
// }
let tween = gsap.from('.habilidad-img-txt', {
            y: 300,
            stagger: 0.8,
            opacity: 0
        })

// SET
gsap.set('#titulo', {
    y: 300,
    opacity: 0,
});
// TO
gsap.to('#titulo', {
    duration: 1.5,
    y: 0,
    opacity: 1,
});


// SET
gsap.set('#imagen_portada', {
    opacity: 0,
});
// TO
gsap.to('#imagen_portada', {
    duration: 2.5,
    opacity: 1
});