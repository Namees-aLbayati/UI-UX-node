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
type:DataTypes.DATE,
defaultValue:Date.now()
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'User',
            key:'id'
        }
    },
    post_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'Post',
            key:'id'
        }
    }
},{
    sequelize,
})

module.exports=Comment