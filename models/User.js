const sequelize=require('../config/connection')
const {Model,DataTypes}=require('sequelize');
class User extends Model{};
User.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    username:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
      unique:true,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:DataTypes.STRING,
        validate:{
            len:[8]
        }
    },
    isAdmin:{
        type:DataTypes.BOOLEAN
    },
   
},{
    sequelize,
    freezeTableName:true});

   

    module.exports=User;