const express = require('express')

//Definir objeto de ruteo
const router = express.Router()

//Las rutas de bootcamps

//Listar todos los bootcamps
router.get('/', (req,res)=>{
    res
        .status(200)
        .json({
            "success" : true,
            "data" : "Aqui van a salir todos los bootcamps"
        })
})

//Listar bootcamp por id
router.get('/:id', (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success" : true,
            "data" : `Aqui va a salir el bootcamp cuyo id es: ${req.params.id}`
        })
})

//Actualizar bootcamps
router.put('/:id', (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success" : true,
            "data" : `Aqui va a actualizarse el bootcamp cuyo id es: ${req.params.id}`
        })
})

//Eliminar bootcamps
router.delete('/:id', (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success" : true,
            "data" : `Aqui se va a eliminar el bootcamp cuyo id es: ${req.params.id}`
        })
})

//Crear nuevo bootcamp
router.post('/', (req,res)=>{
    res
        .status(200)
        .json({
            "success" : true,
            "data" : "Aqui vamos a registrar bootcamps"
        })
})

module.exports = router

