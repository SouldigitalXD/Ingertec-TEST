
export class RegisterService {

    constructor() {
        this.URL = 'http://localhost:3000/api/register';
    }

    async obtenerRegistro(id) {

        try {
            const resp = await fetch( `${ this.URL }/${ id }` );
    
            if( !resp.ok ) throw 'Error en la peticion';
    
            const data = await resp.json();
    
            return data;
    
        } catch( err ) {
    
            throw err;
    
        }
    }

};
