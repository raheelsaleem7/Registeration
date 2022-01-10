import React from 'react'
import './_Login.scss'
import Header from '../Header/Header'

function Login() {
    return (
        <div className="login">
           <div className="login_container">
            <Header />
            
            <div className='forget_content'>
             <h2 className='forget_h'>Login</h2>
              </div>
          <div className="email_login">
            <div className='for_email'>
               <label for="email" className='form_name'>Email</label>
            <div className='div_input'>
               <div>
                <svg aria-hidden="true" focusable="false" width="30px" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#cfcfcf" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>    
                  </div>
               <input type="text" placeholder="Enter Email"  className='input_data' required />
               </div>
               </div>
  
             <div className='for_email'>
                <label for="psw" className='form_name'><b>Password</b></label>
            <div className='div_input'>
               <div>
               <svg aria-hidden="true" focusable="false" width="25px" data-prefix="fas" data-icon="lock" class="svg-inline--fa fa-lock fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#cfcfcf" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
                  </div>
                  <input type="password" placeholder="Enter new password"  className='input_data' required />
               </div>
               </div>
               <div className='forfit'>
           <span className='signup'>Forget Password?</span>
           </div>
           </div>

          

           <div className='btn_position'>
                <button className='register_btn'>Login</button>
              </div>

              <div className='description'>
                <p className='account'>Doesn't have an account? <span className='signup'>Register</span> </p>
              </div>
           </div> 
        </div>
    )
}

export default Login
