const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const cors = require('cors');
const mongoose = require('mongoose')
const path = require("path");
const Post = require('./NewPost/Post');

const app = express()
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'AddPosts');
    },
    filename: (req, file, cb) =>{
        console.log(file)
         cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage })

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/form', async (req, res) => {
    console.log("Browser requested");
    try {
        const results = await Post.find();
        res.json(results);
    }
    catch (e){
        res.status(400).json({ error: e})
    }
})

app.post('/form', upload.single('PostImage'), async (req, res) => {
    try {
        let data = new Post({
            "PostImage" : {
                data: fs.readFileSync('AddPosts/' + req.file.filename),
                contentType: 'image/jpeg'
            },
            "name" : await req.body.name,
            "location" : await req.body.location,
            "description" : await req.body.description,
            "date" : new Date().getDate()
        })
         await data.save();
         res.status(201).json(data);
    } catch (e){
        res.status(400).json({message:e.message})
    }
})

module.exports = app;

app.listen(3001, () => {
    console.log('Backend Running...')
})