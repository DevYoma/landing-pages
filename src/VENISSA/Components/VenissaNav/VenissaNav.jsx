import React, { useState } from 'react';
import './VenissaNav.css';
import { BsTelephone } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg'


const VenissaNav = () => {
    const [click, setClick] = useState(false)
    
    const setHandleClick = () => {
        setClick(!click)
    }

    return ( 
        <nav className="venissaNav">
            <ul className="venissaNav__ul" id={click ? "venissa__hidden" : ""}>
                <li onClick={() => setClick(!click)}>portfolio</li>
                <li onClick={() => setClick(!click)}>about me</li>
                <li onClick={() => setClick(!click)}>my blog</li>
                <li onClick={() => setClick(!click)}>reviews</li>
                <li onClick={() => setClick(!click)}>contact me</li>
            </ul>

            <div>
            <BsTelephone /><p>Schedule a Call </p>
            </div>
            
            <CgMenuRight 
                className='venissaNav__menuIcon'
                onClick={setHandleClick}
            />
        </nav>
     );
}
 
export default VenissaNav;