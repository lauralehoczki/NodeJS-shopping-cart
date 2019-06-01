var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	imgPath: {type: String},
	title: {type: String},
	description: {type: String},
	price: {type: Number}
});

module.exports = mongoose.model('Product', schema);