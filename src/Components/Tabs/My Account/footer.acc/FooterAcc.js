import React from 'react'
import './_FooterAcc.scss'
import MainAcc from '../main/MainAcc';

import Activity from '../Activity/Activity';

function FooterAcc(props) {
    function getData () {
        alert ("")
    }
    return (
        <div className='footer_acc'>
           <div  className={props.currentStep === 1 ? "active-steps" : "not-active"} >    
           <MainAcc data={ getData}  />  
           </div>

           <div className={props.currentStep === 2 ? "active-steps" : "not-active"} >
           <Activity data={ getData}  />  
           </div>
           
        </div>
    )
}

export default FooterAcc
