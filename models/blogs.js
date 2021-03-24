const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    nation:{
        type: String,
        required: true
    },
    bdate:{
        type: String,
        required: true
    }
}, {timestamps: true});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;