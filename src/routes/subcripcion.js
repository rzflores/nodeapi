const { Router } = require("express");
const router = Router();

const mysql = require('mysql')
const bodyParser = require('body-parser')

//configurar mysql

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database :'bdcorreos'
})

//revisar coneccion
connection.connect(error => {
    if(error) throw error;
    console.log('conectado exitosamente')
})

router.get('/' , (req,res)=>{        
    const sql = 'select * from correos'

    connection.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length > 0){
            res.json(result)
        }else{
            res.send('no hay resgistros')
        }
    })
    
});
router.post('/' , (req,res)=>{ 
    const sql = 'insert into correos set ?'   
    //const { correo }= req.body;
    const objCorreo = {
        correo : req.body.correo
    }

    connection.query(sql,objCorreo,err =>{
        if(err) throw err;
        res.send("correo guardado")
    })
    // if(correo){
    //     const nuevoCorreo = {...req.body}
    //     res.send('guardado con exito');
    // }else{
    //     res.send('Error-No guardado');
    // }

    
});

module.exports = router;


