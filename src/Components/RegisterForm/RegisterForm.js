import React from 'react'
import './_RegisterForm.scss'

function RegisterForm() {
    return (
        <div className='register'>
            <div className='register_container'>
              <div className='heading'>
              <h1 className='alpha_clr'>alphametrica</h1>
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
                 <div>      
               <input type="checkbox"  />
               <label className='label_clr'> More than 8 characters</label>
               </div>

               <div className='div_checkbox'>
               <input type="checkbox"  className='checkbox_clr'  />
               <label  className='label_clr'> One Number</label>
               </div>

               
                 </div>

                 <div className='checkbox_content'>
                 <div  className='div_checkbox'>
               <input type="checkbox"  className='checkbox_clr'   />
               <label  className='label_clr'> One Upper Case Letter</label>
                 </div>
                 <div className='div_checkbox'>
               <input type="checkbox"  className='checkbox_clr'  />
               <label  className='label_clr'> One Special Character</label>
               </div>
               </div>
               </div>

              <div className='btn_content'>
             
             
              <div>
              <input type="checkbox"  />
               <label  className='label_clr'> I accept the Terms & Condition.</label>
              </div>
              
              <div className='btn_position'>
                <button className='register_btn'>Register</button>
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
