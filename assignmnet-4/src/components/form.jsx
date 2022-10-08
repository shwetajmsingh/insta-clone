import "./form.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AddPost(){
    const navigate = useNavigate()
    const [filename, setFilename] = useState('No File Chosen');
    const [file, setFile] = useState({});
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

     
     const addPost = (e) => {
       e.preventDefault();
     
    const Post = new FormData()
    Post.append('PostImage', file)
    Post.append('name', name)
    Post.append('location', location)
    Post.append('description', description)
    Post.append('date', new Date().getDate())
    axios.post('https://instaclonebackend98.herokuapp.com', Post)
    .then(function (response) {
        console.log(response);
        alert('successful');
        navigate('/post-view')
    })
    .catch(function (error) {
        console.log(error);
        alert('error')
    });
}

    return (
        <>
        <nav className="header">
                <section className="logo">
                    <img src={require("../images/header.png")} alt="logo" />
                    
                </section>
                 <section className="camera-icon" >
                 <button className="goToAddPost" onClick={AddPost}>
                    <img src={require("../images/camera.png")} alt="camera" />
                </button>
                 </section>
            </nav>

        <div className="formbox">
        {/* <img src={image === '' ? '' : URL.createObjectURL(image)}  alt='img'/>  */}
            <form method="POST" action="/form" enctype="multipart/form-data">
                <input type="file" onChange={(e) => {
                    setFilename(e.target.value.split("\\").pop())
                    setFile(e.target.files[0])
                }}
                 name="PostImage" ></input>
                <input type="text" onChange={(e) => setName(e.target.value)} name="name" placeholder="Author"></input>
                <input type="text" onChange={(e) => setLocation(e.target.value)} name="location" placeholder="Location"></input>
                <input type="textarea" onChange={(e) => setDescription(e.target.value)} name="description" placeholder="Description"></input>
            </form>
    
            <button onClick={addPost}>ADD POST</button>
        
        
        </div>
        </>
    )
}

export default AddPost;