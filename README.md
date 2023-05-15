# UI-UX-node


RESTART browser and server side:
1-add   <script src="//localhost:35729/livereload.js"></script> to html file
2-
npm i connectlivereload livereload
3-add json file  "scripts": {
    "start": "node server.js",
    "dev": "livereload -v -w 1000 public & nodemon server.js"
  }
4-server.js require both of them 
const livereload=require('livereload');
const server=livereload.createserver();
server.watch(path.join(
__dirname,'public'));


const connectLivereload=require('connect-livereload');//will connect with html link
app.use(connectlivereloa())