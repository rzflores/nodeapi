const { Router } = require("express");
const router = Router();

router.get('/' , (req,res)=>{
    const data = ({"saludo":"hola mundo22"})


    res.json(data);
})

module.exports = router;


