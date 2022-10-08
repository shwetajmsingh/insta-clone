const mongoose = require("mongoose");

const DB = 'mongodb+srv://Shweta:Singh@cluster0.spoozcu.mongodb.net/mernpost?retryWrites=true&w=majority'

mongoose.connect(DB, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true })
.then( () => console.log("connection succesfull..."))
.catch((err) => console.log(err)) ;