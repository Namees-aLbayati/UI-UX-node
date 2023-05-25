const routes=require('express').Router();
const userRoutes=require('./routes/userRouter')
routes.use('/api',userRoutes);

module.exports=routes