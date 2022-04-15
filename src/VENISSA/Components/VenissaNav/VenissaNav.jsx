import React from 'react';
import './VenissaNav.css';
import { BsTelephone } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg'


const VenissaNav = () => {
    return ( 
        <nav className="venissaNav">
            <ul className="venissaNav__ul">
                <li>portfolio</li>
                <li>about me</li>
                <li>my blog</li>
                <li>reviews</li>
                <li>contact me</li>
            </ul>

            <div>
            <BsTelephone /><p>Schedule a Call </p>
            </div>
            
            <CgMenuRight 
                className='venissaNav__menuIcon'
                onClick={() => alert("Window")}
            />
        </nav>
     );
}
 
export default VenissaNav;