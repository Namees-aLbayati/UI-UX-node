const sequelize=require('../config/connection')
const {Model,DataTypes}=require('sequelize');

class Post extends Model{}
Post.init({
id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
},
title:{
    type:DataTypes.STRING
},
details:{
    type:DataTypes.STRING
},
createdAt:{
    type:DataTypes.DATE
}, user_id:{
    type:DataTypes.INTEGER,
    references:{
        model:'user',
        key:'id'
    }
}
},{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'

});
module.exports=Post;