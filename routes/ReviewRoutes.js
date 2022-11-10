const express = require('express')
const { getAllReview, getSingleReview, updateReview,  deleteReview, createReview } 
= require('../controllers/ReviewController')

//Definir objeto de ruteo
const router = express.Router()

//Crear rutas sin parametro
router.route('/')
            .get(getAllReview)
            .post(createReview)

//Crear rutas con parametros
router.route('/:id')
            .get(getSingleReview)
            .put(updateReview)
            .delete(deleteReview)

module.exports = router