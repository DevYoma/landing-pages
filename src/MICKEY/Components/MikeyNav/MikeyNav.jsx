import React from 'react';
import './MikeyNav.css';
import {BsTwitter} from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';
import { BsBehance } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


const MikeyNav = () => {
    return ( 
        <nav className='mikeyNav'>
            <ul className="mikey__navList">
                <li>Home</li>
                <li>About Me</li>
                <li>My Work</li>
                <li>My Skills</li>
                <li>Contact Me</li>
            </ul>

            <div className="mikey__navIcon">
                <BsTwitter />
                <BsLinkedin />
                <BsVimeo />
                <BsBehance />
                <BsInstagram />
            </div>
        </nav>
     );
}
 
export default MikeyNav;