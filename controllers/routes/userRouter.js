const sequelize=require('../../config/connection')
const router=require('express').Router();
const {Comment,Post,User}=require('../../models')
router.post('/signup',async(req,res)=>{
try{

    const userData= await User.create(req.body)
 userData.save()
 if(userData){
    res.status(200).json(userData)
    console.log('signup ok')
 }
}catch(err){
res.send(err)
console.log('signup NOT ok')

}
})


router.post('/signin',async(req,res)=>{

const userData1=await User.findOne({where:{email:req.body.email}});
const matching= await userData1.comparePass(req.body.password)
console.log(matching)
if(matching){
    req.send('you are good to go man')
}else{
    req.send('nothing found here ')

}

})




module.exports=router