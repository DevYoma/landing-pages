import React, { useState } from 'react';
import './MikeyNav.css';
import {BsTwitter} from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';
import { BsBehance } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg'

const MikeyNav = () => {
    const [click, setClick] = useState(false)
    const setHandleClick = () => {
        setClick(!click)
    }
    return ( 
        <nav className='mikeyNav'>
            <ul className="mikey__navList" id={click ? 'mikey__hidden' : null}>
                <li onClick={() => setClick(!click)}>Home</li>
                <li onClick={() => setClick(!click)}>About Me</li>
                <li onClick={() => setClick(!click)}>My Work</li>
                <li onClick={() => setClick(!click)}>My Skills</li>
                <li onClick={() => setClick(!click)}>Contact Me</li>
            </ul>

            <div className="mikey__navIcon">
                <BsTwitter />
                <BsLinkedin />
                <BsVimeo />
                <BsBehance />
                <BsInstagram />
            </div>

            <CgMenuRight 
                className="mikey__mobileIcon"
                onClick={setHandleClick}
            />
        </nav>
     );
}
 
export default MikeyNav;