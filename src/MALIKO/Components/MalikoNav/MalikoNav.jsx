import React from 'react';
import './MalikoNav.css'
import Icon1 from '../../assets/Union.png';
import Icon2 from '../../assets/personIcon.png';
import Icon3 from '../../assets/basket.png';

const MalikoNav = () => {
    return ( 
        <nav className="malikoNav">
            <ul className='malikoNav__lists'>
                <li>portfolio</li>
                <li>about me</li>
                <li>contact us</li>
                <li>my blog</li>
                <li>reviews</li>
            </ul>

            <div className="malikoNav__icon">
                {/* <img src="" alt="" /> */}
                <img src={Icon1} alt="icon" />
                <img src={Icon2} alt="icon2" />
                <img src={Icon3} alt="icon3" />
            </div>
            
        </nav>
     );
}
 
export default MalikoNav;