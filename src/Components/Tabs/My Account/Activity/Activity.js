import React from 'react'
import './_Activity.scss'

function Activity() {
    const activity = [
        {
            heading:"Investment Option",
            para:"Sell",
            plus:"+",
            amount:"W4715",
            date:"Jan 1,2022",
            isPositive: true,
        },
        {
            heading:"Lorem ipsum",
            para:"Buy",
            plus:"-",
            amount:"W4715",
            date:"Feb 10,2022",
            isPositive: false,
        },
        {
          
            heading:"Lorem ipsum",
            para:"Withdrawl",
            plus:"-",
            amount:"W4715",
            date:"Feb 9,2022",
            isPositive: false,
        },
        {
            heading:"Investment Option",
            para:"Deposit",
            plus:"+",
            amount:"W4715",
            date:"Feb 9,2022",
            isPositive: true,
        }

    ]
    return (
        <div className='activity'>
          <div className='activity_container'>
            
              <div className='for_heading'>
                <h2 className='acc_h'>Activity</h2>
               </div>

               <div className='month'>
                   <span  className='acc_h'>January 2022</span>
               </div>
              <div className='activity_content'>
               

       {
           activity.map((Activity) => (
                  <div className='investment'>
                  <div className='icon'>
                  <svg aria-hidden="true" focusable="false" width="25px" data-prefix="fas" data-icon="dice" class="svg-inline--fa fa-dice fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="white" d="M592 192H473.26c12.69 29.59 7.12 65.2-17 89.32L320 417.58V464c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48V240c0-26.51-21.49-48-48-48zM480 376c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm-46.37-186.7L258.7 14.37c-19.16-19.16-50.23-19.16-69.39 0L14.37 189.3c-19.16 19.16-19.16 50.23 0 69.39L189.3 433.63c19.16 19.16 50.23 19.16 69.39 0L433.63 258.7c19.16-19.17 19.16-50.24 0-69.4zM96 248c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm0-128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24zm128 128c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"></path></svg>
                  </div>
                <div className='div_invest'>
                 <div className='invest'>
                  <div>
                      <h3 className='inner_text'>{Activity.heading}</h3>
                  </div>
                  <div>
                  <p className='inner_text1'>{Activity.para}</p>
                  </div>
                  </div>
                  <div className='invest'>
                  <div>

                      <p className={`${Activity.isPositive ? "inner_text2_green" : "inner_text2_negative"}`}>{Activity.plus} <span>{Activity.amount}</span></p>
                  </div>
                  <div>
                      <p className='inner_text1'>{Activity.date}</p>
                  </div>
                  </div>
                  </div>

                    </div>   
           ))}
                   </div>

                  
               </div>
          </div>            
        
    )
}

export default Activity
