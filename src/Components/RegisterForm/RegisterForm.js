import React from 'react'
import Header from '../Header/Header'
import './_RegisterForm.scss'
import { Link } from 'react-router-dom';

function RegisterForm() {
    return (
        <div className='register'>
            <div className='register_container'>
              <div className='heading'>
             <Header />
              <p className='register_clr'>Registeration</p>
              </div>
               
               <div className='register_content'>
              <div>
               <label for="name" className='form_name'><b>Full Name</b></label>
               <input type="text" placeholder="Enter name" className='input_data' required />
              </div>
 
               <div>
               <label for="phone" className='form_name'>Phone</label>
               <input type="text" placeholder="Enter Number"  className='input_data' required />
               </div>

               <div>
               <label for="dob" className='form_name'>Date Of Birth</label>
               <input type="text" placeholder="yyyy-mm-dd"  className='input_data' required />
               </div>

               <div>
               <label for="email" className='form_name'>Email</label>
               <input type="text" placeholder="Enter Email"  className='input_data' required />
               </div>

               <div>
               <label for="psw" className='form_name'><b>Password</b></label>
               <input type="password" placeholder="Enter Password"  className='input_data' required />
               </div>

               <div>
               <label for="psw-repeat" className='form_name'><b>Confirm Password</b></label>
               <input type="password" placeholder="Repeat Password"  className='input_data' required />
               </div>

               </div>

               <div className='register_opt'>

                   <div className='checkbox_content'>
                 
                   <div class="form-group">
                   <input type="checkbox" id="css" />
                  <label for="css">More than 8 characters</label>
                  </div>
               

                  <div class="form-group">
                   <input type="checkbox" id="html" />
                  <label for="html">One number</label>
                  </div>
               
               
                 </div>

                 <div className='checkbox_content'>
                 <div className='form-group'>
               <input type="checkbox"   id="js"  />
               <label  for="js"> One Upper Case Letter</label>
                 </div>
                 <div className='form-group'>
               <input type="checkbox"  id="sass" />
               <label for="sass"> One Special Character</label>
               </div>
               </div>
               </div>

              <div className='btn_content'>
             
             
              <div className='form-group'>
              <input type="checkbox"  id="active"  />
               <label  for="active"> I accept the Terms & Condition.</label>
              </div>
              
              <div className='btn_position'>
              <Link to="/confirmation"><button className='register_btn'>Register</button></Link>
              </div>

              <div className='description'>
                <p className='account'>Already have an account? <span className='signup'>Sign up</span> </p>
              </div>
              </div>
            </div>
        </div>
    )
}

export default RegisterForm
