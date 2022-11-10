'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value){
          return Course.findOne({where:{title:value}})
          .then((title) => {
            if (title) {
              throw new Error('title ya existe');
            }
          })
        },

        notNull: {
          args: true,
          msg: 'title debe estar presente'
        },

        notEmpty: {
          args: true,
          msg: 'title no debe ser vacio'
        },
      }
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        unique(value){
          return Course.findOne({where:{description:value}})
          .then((description) => {
            if (description) {
              throw new Error('descripción ya existe');
            }
          })
        },
        notNull: {
          args: true,
          msg: 'description debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'description no debe ser vacio'
        },
      }
    },
    weeks: {
      type: DataTypes.INTEGER,
      validate:{
        isInt:{
          args: true,
          msg: 'Debe contener solo numeros'
        }
      }
    },
    enroll_cost: {
      type: DataTypes.FLOAT,
      validate:{
        isFloat:{
          args: true,
          msg: 'comprueba si hay números'
        }
      }
    },
    minimun_skill: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'habilidad mínima debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'habilidad mínima no debe ser vacio'
        },
      },
    },
    bootcamp_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'bootcamp_id debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'bootcamp_id no debe ser vacio'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Course',
    timestamps: false
  });
  return Course;
};