const sequelize=require('../config/connection')
const {Model,DataTypes}=require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model{
    comparePass(pass){
return bcrypt.compare(pass, this.password);


    }
};
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
      unique:true
        
    },
    password:{
        type:DataTypes.STRING,
       
    },
    isAdmin:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
   
},{
    hooks:{
        
async beforeCreate(userData){
    userData.password=await bcrypt.hash(userData.password, 10)
return userData
}
    }
,


    sequelize,
    timestamps:false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});


const jane = User.build({ username: "Jane" ,'email':"n@n.com",'password':"n"});
console.log(jane instanceof User)
   
 jane.save();

    module.exports=User;