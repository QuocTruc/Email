import React, {useState,useEffect} from "react";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import "./App.css";
import Email from "./pagesEmail/Dashboard";
import Login from "./pagesEmail/Login/index";



function App() {
  
const [ilogin, setLogin] = useState(false)
let navigate = useNavigate()

 useEffect (() => {
if(!ilogin){
  navigate("/login")
}
},[])
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Navigate to="/login" />}  /> */}
        <Route path="/login" element={< Login  setLogin={setLogin} />}  />
        <Route path="/main/*" element={<Email />} />
      </Routes>
    </div>
  );
}

export default App;
