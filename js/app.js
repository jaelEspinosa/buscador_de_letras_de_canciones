import * as UI from './interfaz.js'

import API from './api.js';

UI.fomrmularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();

    // Obener datos del formulario

    const artista = document.querySelector('#artista').value.toUpperCase();
    const cancion = document.querySelector('#cancion').value.toUpperCase();
    
if( artista === '' || cancion === ''){
    mostrarError('Error....Todos los campos son obligatorios');
}
   // consltar nuestra api  
const busqueda = new API(artista, cancion);
busqueda.consultarApi();
}



function mostrarError(mensaje){
    UI.headingResultado.textContent = mensaje; 
    UI.headingResultado.classList.add('error');
    UI.divResultado.style.visibility='visible' 
    // UI.divMensajes.textContent = mensaje;
    // UI.divMensajes.classList.add('error');
    setTimeout(() => {
        UI.divMensajes.textContent = '';
        UI.divMensajes.classList.remove('error');
        UI.headingResultado.textContent = ''; 
        UI.headingResultado.classList.remove('error');
        location.reload()
    }, 3000);
        UI.divResultado.style.visibility='hidden'
    
 };



