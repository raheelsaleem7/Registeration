import React from 'react'
import "./_PortfolioMain.scss"

function PortfolioMain() {
    const main = [
        {
          alpha:"V",
          vug:"VUG",
          share:"share:24",
          w:"W",
          money:"1,210,308",
        }
    ]
    return (
        <div className='main_portfolio'>
          
          {
                main.map((PortfolioMain) (

            <div className='container_portfolio'>
           
                <div className='v'>
                <h2 className='for_v'>{PortfolioMain.alpha}</h2>
                </div>
                 
                 <div className='vug'>
                <div>
                    <span className='for_vug'>{PortfolioMain.vug}</span>
                </div>
                <div>
                    <span className='for_share'>{PortfolioMain.share}</span>
                </div>
                </div>
<div className='set_price'>
                    <div className='price_content'>
                <div>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-up" class="svg_up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path></svg>
                </div>
                <div>
                    <p className='price'><span className='unit'>{PortfolioMain.w}</span>{PortfolioMain.money}</p>
                </div>
              </div>

              <div>
              <p className='price'><span className='unit'>{PortfolioMain.w}</span>6,603,723</p>
              </div>
</div>
   
            </div>
           ))
        }
        </div>
    )
}

export default PortfolioMain
