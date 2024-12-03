import "./App.css"
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/home/Home"
import Profile from "./Pages/Profile/Profile";

import {Routes, Route, Navigate} from 'react-router-dom';
import { useSelector } from "react-redux";
function App() {
  const user =useSelector((state)=>state.authReducer.authData)
  return (
    <div className="App">
      <div className="blur" style={{top:'-18%',right:'0'}}></div>
      <div className="blur" style={{top:'36%',left:'-8rem'}}></div>
      {/*<Auth/>*/}
        <Profile/>
      {/*<Home/>*/}


  
    </div>
  );
}

export default App;
