const express = require('express');
const  app = express();
const  porta = 3000;

app.use( express.static('public')); 
 app.set ('view_engine',  'ejs'); 
  app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) =>{
 res.send("My first page");
})

app.listen(porta, () => {
console.log('O servidor esta funcionando');
})


