const { Router } = require('express');
const router = Router();

const connection = require('../database');


router.get('/', (req, res) => {
    connection.query( 'SELECT * FROM TResource', (err, rows, fields) => {
       
        (!err) ? res.json(rows) : console.log(err);

    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    connection.query( `SELECT * FROM TResource WHERE id = ?` , [id],  (err, rows, fields) => {
       
        (!err) ? res.json(rows) : console.log(err);

    });
});

router.post('/', ( req, res ) => {
    const { id, created, descrip } = req.body;
    const query = `
        CALL miPrimerNombreAdd( ?, ?, ? );
    `;
    connection.query(query, [ id, created, descrip ], (err, rows, fields) => {
        
        (!err) ? res.json({Status: 'Register save'}) : console.log(err);

    });
});

router.put('/:id', ( req, res ) => {
    const { created, descrip  } = req.body;
    const { id } = req.params;
    const query = `CALL miPrimerNombreAdd(?, ?, ?)`;
    connection.query(query, [ id, created, descrip ], (err, rows, fields) => {
        
        (!err) ? res.json({Status: 'Register update'}) : console.log(err);
    
    });
});

router.delete('/:id', (req, res ) => {
    const { id } = req.params;
    connection.query('DELETE FROM TResource WHERE id = ?', [id], (err, rows, fields) => {
        
        (!err) ? res.json({Status: 'Register delete'}) : console.log(err);

    });
});

module.exports = router;