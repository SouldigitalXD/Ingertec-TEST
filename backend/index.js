
const express = require('express');
const morgan  = require('morgan');
require('dotenv').config();
// const multer  = require('multer');
const path    = require('path');
const cors    = require('cors');

//inicializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
require('./database');

// Middlewares
app.use(morgan('dev'));
// const storange = multer.diskStorage({
//     destination: path.join(__dirname, 'public/uploads'),
//     filename( req, file, callback ) {
//         callback(null, new Date().getTime(), + path.extname(file.originalPath) );
        
//     }
// });
// app.use(multer({storange}).single('image'));
app.use(express.urlencoded({extended: false})); // recibe formularios en json

app.use(express.json());
app.use(cors()); //IMPORTANTE

// Routes
app.use( '/api/register', require('./routes/registros'));

//// Static files
app.use(express.static(path.resolve(__dirname, 'public')));

//Start the server
app.listen(app.set('port'), () => {
    console.log( 'Server on port:', app.set('port'));
});