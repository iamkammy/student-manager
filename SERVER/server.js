const express =  require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 500;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
    res.send('Hello from my server');
})
app.get('/huu', function(req,res){
    res.send('Huh  go back to home')
})
app.post('/emp', function(req, res){
    console.log(req.body);
    res.status(200).send({"message":"DAta submitted successfully"});
})

app.listen(PORT, function(){
    console.log("Server is listening on localhost:",PORT);
});