const express=require('express');
const {create}=require('express-handlebars');
const sequelize=require('./config/connection')
const hbs=create({});
const routers=require('./controllers/userRouter')

const path=require('path')
const PORT=3001||process.env.PORT;
const app=express();

const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(routers)
liveReloadServer.server.once("connection", () => {
    console.log('reloading')
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/signin', (req, res) => {
  res.render('login');
});
app.get('/signup',(req,res)=>{
  res.render('signup')
})

sequelize.sync({force:true}).then(()=>{
    app.listen(PORT,()=>{
        console.log('listening on 3001')
    })
})

