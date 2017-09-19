console.log("HOLA AMIGO MI NAME0 ES AJ")
const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const messages = [

]

const app = express()

app.use(express.static('assets'))
app.use(bodyParser.json())

app.get('/messages',function(req, res, next){
  res.status(200).json({messages: messages});
});


app.post('/messages', function(req, res, next){
  messages.unshift({user:req.body.user, message: req.body.message, time:new Date() });
  res.status(200).json({messages: messages});
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
})
