import React from 'react'
import Header from '../Header/Header'
import './_Confirmation.scss'

function Confirmation() {
    return (
        <div className='confirmation'>
            <div className='confirmation_container'>
             
             <div className='heading2'>
             <Header />
             </div>
             <div className='confirmtion_description'>
             <h2 className='confirm_h'>Confirmation code has been sent to your email</h2>
              </div>
           
           <div className='confirm_text'>
                <p className='confirm_p'>The code has been sent to yourmail@gmail.com.</p>
             <p className='confirm_p'>Please enter the code below.</p>
               </div>

               <div className='blanck_div' >
              <input typeof='text' className='blanck' max="1" min="1" />
              <input typeof='text' className='blanck' />
              <input typeof='text' className='blanck' />
              <input typeof='text' className='blanck' />
              <input typeof='text' className='blanck' />
              <input typeof='text' className='blanck' />
              <input typeof='text' className='blanck' />
               </div>

               <p className='resend'>Resend code again</p>

               <div className='verify'>
               <button className='register_btn'>Verify</button>
               </div>

            </div>
            
        </div>
    )
}

export default Confirmation
