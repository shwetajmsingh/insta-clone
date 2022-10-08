
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './components/landing-page/landing-page';
import PostView from './components/header/post-view/post-view';
import AddPost from './components/form';

function App() {
  return (
    <>
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Landing/>}/>
           <Route path='/post-view'element={<PostView/>}/>
           <Route path='/src/components/form.jsx' element={<AddPost/>}/>
         </Routes>
       </BrowserRouter>
      

    </>
  );
}

export default App;
