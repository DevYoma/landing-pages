import React from 'react';
import './MatheldaHeroFooter.css';
import Woman from '../../assets/woman.png'

const MatheldaHeroFooter = () => {
    return ( 
        <div className="matheldaHeroFooter">
            <div className="matheldaHeroFooter__left">
                {/* leftfooter */}
                {/* <img src={Woman} alt="" /> */}
                <p>eat <span><hr className='matheldaHeroFooter__leftLine'/></span></p> 
                <p>breath.</p>
                <p>design.</p>
            </div>

            <div className="matheldaHeroFooter__right">
                <h2 className="matheldaHeroFooter__rightHeading">Meet Mathelda</h2>
                <div className="matheldaHeroFooter__div">
                    <p>Ham followed now ecstatic use speaking exercise may</p>
                    <p>repeated. Himself he evident oh greatly my on inhabit</p>
                    <p>general concern.</p>
                </div>

                <p className="matheldaHeroFooter__footer">Learn More</p>
            </div>
        </div>
     );
}
 
export default MatheldaHeroFooter;