//Dependencias:
//Objeto de conexión
const sequelize = require('../config/seq')
//Datatypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El modelo
const ReviewModel = require('../models/review')
const { response } = require('express')
//Crear la entidad
const Review = ReviewModel(sequelize, DataTypes)

//Listar todos los Review
exports.getAllReview = async (req, res) => {

    //Traer los usuarios
    try {
        const review = await Review.findAll();
        //Response con los datos
        res
            .status(200)
            .json({
                "success": true,
                "data": review
            })
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
    }
}

//Listar review por id
exports.getSingleReview = async (req, res) => {
    try {
        const singleReview = await Review.findByPk(req.params.id)
        if (singleReview) {
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleReview
                })
        } else {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "usuario no existente"
                })
        }

    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
    }

}

//Actualizar review
exports.updateReview = async (req, res) => {
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (!singleReview) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "usuario no existente"
                })
        } else {
            await Review.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            const updateReview = await Review.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updateReview
                })
        }

    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "error de servidor"
            })
    }

}

//Borrar reviews 
exports.deleteReview = async (req, res)=>{
    //console.log(req.params.id)
    try {
        const SingleReview = await Review.findByPk(req.params.id);
        if (!SingleReview) {
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
        } else {
            await Review.destroy({
                where: {
                    id: req.params.id
                }
              });
              res
            .status(200)
            .json({
                "success": true,
                "data": SingleReview
            })
            }
} catch (error) {
        res
        .status(400)
        .json({
            "success": false,
            "errors": " Error de servidor desconocido"
        })
    }
    
}

//Crear nuevo review
exports.createReview = async (req, res) => {
    try {
        const newReview = await Review.create(req.body)
        res
            .status(200)
            .json({
                "success": true,
                "data": newReview
            })
    } catch (error) {
        if (error instanceof ValidationError) {
            //Recorrer el arreglo de errores
            //map
            const errores = error.errors.map((elemento) => elemento.message)
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": errores
                })
        } else {
            res
                .status(400)
                .json({
                    "success": false,
                    "errors": "error de servidor"
                })
        }
    }
}