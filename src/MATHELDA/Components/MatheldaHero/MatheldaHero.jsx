import React from 'react';
import './MatheldaHero.css'
import Line from '../../assets/MatheldaHeroLine.png';
import Text from '../../assets/MatheldaText.png';

const MatheldaHero = () => {
    return ( 
        <div className="matheldaHero">
            <div className="matheldaHero__left">
                <div className="matheldaHero__leftGreeting">
                    <h3>Hello There</h3> <img src={Line} alt="line " />
                </div>

                <div className="matheldaHero__leftMainText">
                    {/* <h2>breathing</h2>
                    <h2>pixels</h2> */}
                    <img src={Text} alt="text" />
                </div>
            </div>

            <div className="matheldaHero__right">
                <div className='matheldaHero__rightTextDiv'>
                    <p>Ham followed now ecstatic use speaking exercise may </p>
                    <p> repeated. Himself he evident oh greatly my on inhabit general</p>
                    <p>concern.</p>
                </div>
            </div>
        </div>
     );
}
  
export default MatheldaHero;