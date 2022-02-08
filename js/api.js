

import *  as UI from './interfaz.js'
    
class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarApi(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        

        fetch(url)
          .then ( respuesta => respuesta.json() )
          .then ( resultado => {
                const { lyrics } = resultado;
                if(lyrics){
                    UI.divResultado.style.visibility='visible';
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.innerHTML = `<h2>${this.cancion}</h2><hr><h2>De ${this.artista}</h2>`;
                    UI.fomrmularioBuscar.reset();
                    
                }else{
                    UI.headingResultado.textContent = `No he sido capaz de encontrar la cancion`;
                    UI.headingResultado.classList.add('error')
                    setTimeout(() => {
                        UI.headingResultado.textContent = ''; 
                        UI.headingResultado.classList.remove('error')  
                    }, 3000);
                       UI.divResultado.style.visibility='hidden';
                       location.reload()
                }
              

          })
    }
}


export default API;
