import React,{useState} from 'react';
import './App.css';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Confirmation from './Components/Confirmation/Confirmation';
import ForgetPsw from './Components/ForgetPassword/ForgetPsw';
import EnterPsw from './Components/EnterNewPassword/EnterPsw';
import Login from './Components/LogIn/Login';
import MyAcc from './Components/Tabs/My Account/MyAcc';
import Activity from './Components/Tabs/My Account/Activity/Activity';
import { Routes, Route, Link } from "react-router-dom";



function App() {
  return (
    <div className="App">
    <Routes>
      
     
      <Route exact path="/" element={<RegisterForm />} />

      <Route path="/confirmation" element={ <Confirmation />} />
     

      <Route path="/forgetpsw" element={ <ForgetPsw />} />


      <Route path="/enterpsw" element={ <EnterPsw />  } />


      <Route path="/login"  element={ <Login />  } />
      
      
      <Route path="/myacc"   element={ <MyAcc />} />
     
       
    
      </Routes>
    </div>
  );
}

export default App;
