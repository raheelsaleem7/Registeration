import React from 'react'
import './_MainAcc.scss';


function MainAcc() {
    const data = [
        { 
             inner:"Available cash for Investment",
             price:"W200",
             text:"$0.18",
        },  
        { 
            inner:"Available cash for withdrawal",
            price:"W2000",
            text:"$1.81",
       },  
       { 
        inner:"Available cash for Transaction",
        price:"W300",
        text:"$0.27",
   },  
    ]
    return (
        <div className='main'>
            <div className='main_container'>
           
               
               <div className='main_div'>
               <div className='for_heading'>
                <h2 className='acc_h'>My Account</h2>
               </div>
   {

          data.map((MainAcc) =>  (
            
              <div className='main_content'>
               <div className='for_icon' >
                  <div className='icon'>
                  <svg aria-hidden="true" focusable="false" width="25px" data-prefix="fas" data-icon="dice" class="svg-inline--fa fa-dice fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="white" d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path></svg>
                  </div>
                  <div className='icon_content'>
                    <div>
                     <h4 className='inner_text'>{MainAcc.inner}</h4>
                    </div>

                    <div className='price_div'>
                    <div>
                     <h2 className='price_color'>{MainAcc.price}</h2>
                    </div>
                   
                   <div>
                   <span className='inner_text'>{MainAcc.text}</span>
                  </div>

                    </div>
                  </div>
               </div>

              </div>
              
         ))
}
</div>

            </div>
        </div>
    )
}

export default MainAcc
