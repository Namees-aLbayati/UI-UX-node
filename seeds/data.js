const {User}=require('../models')
const bcrypt=require('bcrypt');
const userData=[
    {
        username:"layth",
        email:"dsee_89@yahoo.com",
        password:"11111111",

    },   {
        username:"hemo",
        email:"hemo_89@yahoo.com",
        password:"11111111",
        
    }  , {
        username:"rere",
        email:"rere_89@yahoo.com",
        password:"11111111",
        
    },{
        username:"namees",
        email:"nn@yahoo.com",
        password:"11111111",
        isAdmin:true
    }
];

const {Post}=require('../models')
const postData=[
    {
        title:"party",
        details:"on namees house",
        user_id:4,
        visitor_id:1
    },   {
       
        title:"play date",
        details:"on playground posted by ayham",
        user_id:2,
        visitor_id:3
        
    }  
];

const {Comment}=require('../models');
const commentData=[
    {
        comment_details:"I will come to playground and my name is rere",
        user_id:1,
        post_id:2

    },{
        comment_details:"intrested on the party,im hemo",
        user_id:2,
        post_id:1

    },{
        comment_details:"im coming to the party and im layth",
        user_id:3,
        post_id:1

    }
]
const userFun=async()=> 
{
   const encryptedpass= userData.map(user => {
        const saltRounds = 10; // Number of salt rounds
        const hashedPassword =  bcrypt.hashSync(user.password, saltRounds);
        return {  ...user,password: hashedPassword };
      });
      await User.bulkCreate(encryptedpass)
      await Post.bulkCreate(postData)

   //await Comment.bulkCreate(commentData)
}



module.exports=userFun;