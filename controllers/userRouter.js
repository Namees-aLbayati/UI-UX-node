const router=require('express').Router();
router.post('/api/signup',(req,res)=>{
    console.log('reciverd',req.body)
})
module.exports=router