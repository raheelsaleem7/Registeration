import React from 'react';
import './App.css';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import Confirmation from './Components/Confirmation/Confirmation';
import ForgetPsw from './Components/ForgetPassword/ForgetPsw';
import EnterPsw from './Components/EnterNewPassword/EnterPsw';
import Login from './Components/LogIn/Login';
import MyAcc from './Components/Tabs/My Account/MyAcc';
import { Routes, Route } from "react-router-dom";
import Portfolio from './Components/Tabs/My Account/Porfolio/Portfolio';



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
     
      <Route path="/portfolio"   element={ <Portfolio />} />
    
      </Routes>
    </div>
  );
}

export default App;
