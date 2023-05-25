const Post=require('./Post');
const User=require('./User');
const Comment=require('./Comment')


Post.belongsTo(User, { foreignKey: 'user_id', as: 'user' });
Post.belongsTo(User, { foreignKey: 'visitor_id', as: 'visitor' });

User.hasMany(Post)


module.exports={User,Post,Comment}