const express = require('express');
const  app = express();
const  porta = 3000;

app.use( express.static('public')); 
 app.set ('view engine',  'ejs'); 
  app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) =>{
 res.render('index.ejs');
 })

app.listen(porta, () => {
 console.log('O servidor esta funcionando' + porta)
});

app.get('/noticia', function(req, res){
 res.render('noticia/index.ejs')
});


app.get('/apresentacao', function(req, res){
res.render('noticia/apresentacao/index1.ejs'); 
});

app.get('/apresentacao2', function(req, res){
res.render('noticia/apresentacao2/index02.ejs'); 
});

app.get('/apresentacao3', function(req, res){
res.render('noticia/apresentacao3/index03.ejs'); 
});

app.get('/apresentacao4', function(req, res){
res.render('noticia/apresentacao4/index04.ejs'); 
});

//app.get('/index.ejs', function(req, res){
 //res.render('1noticias/index.ejs')
//});

//app.get('/1noticia', function(req, res){
 //res.render('1noticias/index.ejs')
//});
