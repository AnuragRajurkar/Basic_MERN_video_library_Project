var express = require("express")
var cors = require("cors")
var mongoClient = require("mongodb").MongoClient;

var connectionstring = 'mongodb://localhost:27017/'

var app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get('/users',(req,res) => {
    mongoClient.connect(connectionstring).then(clientobject => {
        var db = clientobject.db('ToDoDemo');
        db.collection('users').find({}).toArray().then(document => {
            res.send(document)
        })
    })
})

app.post('/registeruser',(req,res) => {
    var task = {
        "UserId" : req.body.UserId,
        "UserName" : req.body.UserName,
        "Password" : req.body.Password,
        "Mobile" : req.body.Mobile
    }
    mongoClient.connect(connectionstring).then(clientobject => {
        var db = clientobject.db('ToDoDemo')
        db.collection('users').insertOne(task).then(() => {
            console.log('User Registered Successfully')
        })
    })
})


app.listen(4040);
console.log(`Server started at : http://127.0.0.1:4040`)