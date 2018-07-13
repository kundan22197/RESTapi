// import mongoose from 'mongoose';

var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookModel = new Schema({
	title: {type : String}, 
	author: {type : String}
	})

// export default mongoose.model('books', bookModel);

module.exports = mongoose.model('books', bookModel);