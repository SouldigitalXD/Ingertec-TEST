// import { RegisterService } from "../class/RegisterService";
import { obtenerRegistro } from "./http-provider";


let btnCargar , btnReset;

const cargarTextoHtml = () => {
    const seccion = document.querySelector('#container-main');
    const img = document.createElement('img');
    

    const html = `
        <div id="containerTextArea" class="hstack gap-3">
            <textarea id="textArea" class="form-control me-auto" cols="1" rows="1" placeholder="Presiona el boton Cargar..."
                aria-label="Presiona el boton Cargar..."></textarea>
            <button id="btnCargar" type="button" class="btn btn-secondary">Cargar</button>
            <div class="vr"></div>
            <button id="btnReset" type="button" class="btn btn-outline-danger">Reset</button>
        </div>
    `;
    
    const divCargarRegistro = document.createElement('div');
    divCargarRegistro.innerHTML = html;

    seccion.appendChild(divCargarRegistro);

}

const eventos = () => {

    btnCargar = document.querySelector('#btnCargar');

    btnCargar.addEventListener('click', async() => {

        const descrip = await obtenerRegistro(5);

            descrip.forEach(descrip => {

                agregarTexto(descrip);
        });

        // const registro = new RegisterService();
        
        // registro.obtenerRegistro(5).then( cb => {
        //     cb.forEach( descrip => {

        //         agregarTexto( descrip );

        //     });
        // });

    });

}

// Pedimos el texto { descrip } del JSON de nuestra DB

const agregarTexto = ( registro ) => {
    const textarea = document.querySelector('#textArea');
    btnReset = document.querySelector('#btnReset');

    textarea.innerText = `${registro.descrip}`;

    btnReset.addEventListener('click', () => {

        textarea.innerText = '';

    });

}

export const init = () => {
    cargarTextoHtml();
    eventos();
    
}