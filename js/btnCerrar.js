let botonContacto = document.querySelectorAll('.boton a');
let ventanaModal = document.getElementById('ventana_modal');
let btnCerrar = document.getElementById('boton_cerrar');

// botonCerrar.addEventListener('click', () => {
//     console.log(ventanaModal.classList = ('ventana_modal active'));
// })

for (let i = 0; i < botonContacto.length; i++) {
    botonContacto[i].addEventListener('click', (e) => {

        e.preventDefault();
        ventanaModal.classList = ('ventana-modal active')
        ventanaModal.style.opacity = '1'
    })
    setTimeout(function () {
        ventanaModal.style.opacity = '0'
        ventanaModal.style.transition = 'all .3s ease-in'
        ventanaModal.style.position = 'fixed'
    }, 1000)

}

btnCerrar.addEventListener('click', function () {
    ventanaModal.classList = ('ventana-modal')
    ventanaModal.style.opacity = '0'

    setTimeout(function () {
        ventanaModal.style.opacity = '1'
        ventanaModal.style.transition = 'all .3s ease-in'
    }, 1000)
})