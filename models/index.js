var mongoose=require('mongoose');
mongoose.set('debug',true);
mongoose.connect('mongodb://michael:1122wwo@ds247699.mlab.com:47699/heroku_r777169f');

mongoose.Promise=Promise;

module.exports.Todo=require('./todo');