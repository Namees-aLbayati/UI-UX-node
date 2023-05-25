const sequelize=require('../config/connection')

const {Model,DataTypes}=require('sequelize');
class Comment extends Model{};
Comment.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    comment_details:{
        type:DataTypes.STRING
    },
    createdAt:{
type:DataTypes.DATE ,
defaultValue:DataTypes.NOW()

  },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id'
        }
    },
    post_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'post',
            key:'id'
        }
    }
},{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
})

module.exports=Comment