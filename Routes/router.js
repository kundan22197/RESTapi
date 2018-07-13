// var app = require('express');
// import express from 'express';
// import Book from '../models/bookModel';

var express = require('express');
var Book = require('../models/bookModel');
const router = express.Router();


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
router.route('/')
    .get(function(req, res){
        console.log('get call');
	Book.find({}, function(err, books){
		res.json(books);
	})
})

    .post(function(req, res){
        let book = new Book(req.body);
        book.save();
        res.status(201).send(book);
    })



router.use('/:bookId', function(req, res, next){
	Book.findById(req.params.bookId, function(req, res){
		if(err){
			res.status(500).send(err);
		}
		else{
			req.book = book;
			next();
		}
	})
})




router.route('/:bookId')
    .get(function(req, res){
    	res.json(req.book);
    })

    .put(function(req, res){
    		book.title = req.body.title;
    		book.author = req.body.author;
    		req.book.save();
    		res.json(req.book);
    })

    .patch(function(req, res){
    		if (req.body._id) {
    			delete req.body._id;
    		}

    		for(let b in req.body){
    			req.book[b] = req.body[b];
    		}

    		req.book.save();
    		res.json(req.book);
    })

    .delete(function(req, res){
        		req.book.remove(function(err){
    			if(err){
    				res.status(500).send(err);
    			}
    			else{
    				res.status(204).send('removed');
    			}
    	})
    })





// export default router;
module.exports = router;