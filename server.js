// import express from 'express';
var router = require('./Routes/router'); 
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var express = require('express');
const app = express();
const port = process.env.PORT || 5656;
// const db = mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds125068.mlab.com:25068/api-test2');

// const db = mongoose.connect(process.env.DB_ADDRESS);

const db = mongoose.connect('mongodb://localhost/mydb');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/api/Books', router);

app.listen(port, function(){
    console.log('Listening at port: ' + port);
})
// const router = express.Router();

// router.get('/', function(){
// 	    res.json([
//             {
//                 id: 1,
//                 title: "Alice's Adventures in Wonderland",
//                 author: "Charles Lutwidge Dodgson"
//             },
//             {
//                 id: 2,
//                 title: "Einstein's Dreams",
//                 author: "Alan Lightman"
//             }
//         ])

// })

// router.get('/2', function(){
// 	res.json(
//         {
//         	id:2,
//         	title: "Einstein's Dreams",
//         	author: "Alan Lightman"
//         }    
// 	)
// })

// export default router;