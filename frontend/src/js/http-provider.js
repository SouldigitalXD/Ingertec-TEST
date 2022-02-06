

const URL = 'http://localhost:3000/api/register';

const obtenerRegistro = async(idNumber) => {

    const resp = await fetch( `${ URL }/${ idNumber }` );
    const data = await resp.json();

    return data;
}


export {
    obtenerRegistro,
}