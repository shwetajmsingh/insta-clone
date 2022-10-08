import "./header.css"
import { useNavigate } from "react-router-dom";
const Header = ()=> {
    const navigate = useNavigate();
    const AddPost = () => {
        navigate("/src/components/form.jsx");
    }
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require("../../images/header.png")} alt="logo" />
                    
                </section>
                 <section className="camera-icon" >
                 <button className="goToAddPost" onClick={AddPost}>
                    <img src={require("../../images/camera.png")} alt="camera" />
                </button>
                 </section>
                 
            </nav>
        </>
    )
}
export default Header;