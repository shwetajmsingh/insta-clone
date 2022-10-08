const mongoose = require("mongoose");

const addPostShcema = new mongoose.Schema({
    PostImage :  {
       data : Buffer,
       contentType: String
    },
    
    name : {
        type: String,
        required : true
    },
     
    location : {
        type: String,
        required: true
    },

    description : {
        type: String,
        required: true
    },

    date : {
        type: Date,
        default: Date.now
    }
})

const Post = new mongoose.model("Post",addPostShcema);