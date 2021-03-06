import React, { useState } from 'react';
import './MalikoNav.css'
import Icon1 from '../../assets/Union.png';
import Icon2 from '../../assets/personIcon.png';
import Icon3 from '../../assets/basket.png';
import { CgMenuRight } from 'react-icons/cg'


const MalikoNav = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click)
    }
    return ( 
        <nav className="malikoNav">
            <ul className='malikoNav__lists' id={click ? "maliko__hidden" : ""}>
                <li onClick={() => setClick(!click)}>portfolio</li>
                <li onClick={() => setClick(!click)}>about me</li>
                <li onClick={() => setClick(!click)}>contact us</li>
                <li onClick={() => setClick(!click)}>my blog</li>
                <li onClick={() => setClick(!click)}>reviews</li>
            </ul>

            <div className="malikoNav__icon">
                {/* <img src="" alt="" /> */}
                <img src={Icon1} alt="icon" />
                <img src={Icon2} alt="icon2" />
                <img src={Icon3} alt="icon3" />
            </div>

            <CgMenuRight 
                className='malikoNav__mobileIcon'
                onClick={handleClick}
            />
            
        </nav>
     );
}
 
export default MalikoNav;