import React from 'react'
import Header from '../Header/Header';
import './_EnterPsw.scss';

function EnterPsw() {
    return (
        <div className='enter_psw'>
            <div className='enter_container'>
            <Header />

           <div className='forget_content'>
             <h2 className='forget_h'>Enter New Password</h2>
              </div>

        
                <div className='for_email'>
                <label for="psw" className='form_name'><b>New Password</b></label>
            <div className='div_input'>
               <div>
               <svg aria-hidden="true" focusable="false" width="25px" data-prefix="fas" data-icon="lock" class="svg-inline--fa fa-lock fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#cfcfcf" d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path></svg>
                  </div>
                  <input type="password" placeholder="Enter new password"  className='input_data' required />
               </div>
    </div>

               <div className='btn_position'>
                <button className='submit_email'>Set New Password</button>
              </div>

              <div className='approved'>
                  <div className='approved_content'>
                    <div className='form-group'>
                    <input type="checkbox"  id="active"  />
                    </div>

                    <p className='forget_h'>Password Changed successfully</p>

                    <div className='btn_position2'>
                <button className='submit_email'>Login</button>
              </div>
                  </div>

              </div>
            
            </div>
        </div>
    )
}

export default EnterPsw
