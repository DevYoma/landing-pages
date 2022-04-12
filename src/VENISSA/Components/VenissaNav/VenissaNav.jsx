import React from 'react';
import './VenissaNav.css';
import { BsTelephone } from 'react-icons/bs'

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

            <p> <BsTelephone /> Schedule a Call </p>
        </nav>
     );
}
 
export default VenissaNav;