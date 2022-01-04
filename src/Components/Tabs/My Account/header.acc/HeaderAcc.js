import React from 'react';
import Header from '../../../Header/Header';
import './_HeaderAcc.scss';
import image1 from '../../../../images/image1.jpg'

function HeaderAcc() {
    return (
        <div className='header_acc'>
            <div className='acc_container'>
                <div className='headerAcc_content'>
                 <div>
                  <Header />
                  </div>
                <div>
                    <img src={image1} width="30px" height="30px"/>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default HeaderAcc
