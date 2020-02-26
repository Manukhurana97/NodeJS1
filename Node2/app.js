const  express = require('express');
const app = express();
const port =3000;

app.get('/', function(req, res){
  res.send("get")
});

app.get('/data', function(req, res){
  res.send("get all data")
});

app.get('/data/:id', function(req, res){
  const id = req.params.id;
  res.send('data id' + id)
});

app.post('/', function(req, res){
  res.send("data post")
});

app.post('/data', function(req, res){
  res.send("data post")
});

app.put('/data', function(req, res){
  res.send("data put");
});

app.delete('/data', function(req, res){
  res.send("data put");
});

app.listen(port , function () {
  console.log("server is running at port at :"+port)

});
