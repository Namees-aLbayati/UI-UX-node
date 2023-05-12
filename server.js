const express=require('express');
const PORT=3001||process.env.PORT;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))
app.listen(PORT,()=>{
    console.log('listening on 3001')
})