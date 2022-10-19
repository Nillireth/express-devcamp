const express = require('express')

//Definir objeto de ruteo
const router = express.Router()

//Las rutas de courses

//Listar todos los courses
router.get('/', (req,res)=>{
    res
        .status(200)
        .json({
            "success" : true,
            "data" : "Aqui van a salir todos los courses"
        })
})

//Listar course por id
router.get('/:id', (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success" : true,
            "data" : `Aqui va a salir el course cuyo id es: ${req.params.id}`
        })
})

//Actualizar courses
router.put('/:id', (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success" : true,
            "data" : `Aqui va a actualizarse el course cuyo id es: ${req.params.id}`
        })
})

//Eliminar courses
router.delete('/:id', (req,res)=>{
    //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success" : true,
            "data" : `Aqui se va a eliminar el course cuyo id es: ${req.params.id}`
        })
})

//Crear nuevo course
router.post('/', (req,res)=>{
    res
        .status(200)
        .json({
            "success" : true,
            "data" : "Aqui vamos a registrar courses"
        })
})

module.exports = router