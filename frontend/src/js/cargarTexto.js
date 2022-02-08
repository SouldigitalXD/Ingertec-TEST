// import { RegisterService } from "../class/RegisterService";
import { obtenerRegistro } from "./http-provider";
import 'regenerator-runtime/runtime';

const body = document.body; 
let btnCargar , btnReset;

const cargarTextoHtml = () => {

    const html = `
        <div id="containerTextArea" class="hstack gap-3 d-flex p-2">
            <textarea id="textArea" class="form-control me-auto shadow-sm" cols="1" rows="1" placeholder="Presiona el boton Cargar..."
                aria-label="Presiona el boton Cargar..."></textarea>
            <button id="btnCargar" type="button" class="btn btn-secondary">Cargar</button>
            <button id="btnReset" type="button" class="btn btn-outline-danger">Reset</button>
        </div>
    `;
    
    const divCargarRegistro = document.createElement('div');
    divCargarRegistro.classList.add('container');
    divCargarRegistro.innerHTML = html;

    body.append(divCargarRegistro);

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