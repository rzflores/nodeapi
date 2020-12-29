const express = require('express')
const app = express();
const morgan = require('morgan');



//configuraciones
//si no existe el puerto por defecto usa el 3000
app.set('port', process.env.PORT || 3000)
app.set('json spaces',2)

// middlewares
app
// escuchar las peticiones y repuestas con morgan
app.use(morgan('dev'));
//permite datos desde formularios
app.use(express.urlencoded({extended:false}))
//permite recibir formatos json
app.use(express.json());


//routes
app.use(require('./routes/index'));
app.use('/api/subcripcion',require('./routes/subcripcion'));
 



// iniciardo servidor
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
});



