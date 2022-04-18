import React, { useState } from 'react';
import './KamiliaNav.css';
import {BsTwitter} from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';
import { BsBehance } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { CgMenuRight } from 'react-icons/cg'


const KamiliaNav = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        // alert("YOLO, code well")
        setClick(!click)
    }

    return ( 
        <nav className="kamiliaNav container">
            <p className="kamiliaNav__name">kamilia.</p>

            <ul className="kamiliaNav__navLinks" id={click ? "kamilia__hidden" : ""}>
                <li onClick={() => setClick(!click)}>porfolio</li>
                <li onClick={() => setClick(!click)}>about me</li>
                <li onClick={() => setClick(!click)}>my blog</li>
                <li onClick={() => setClick(!click)}>reviews</li>
                <li onClick={() => setClick(!click)}>contact me</li>
            </ul>

            <div className="kamiliaNav__icons">
                <BsTwitter />
                <BsLinkedin />
                <BsVimeo />
                <BsBehance />
                <BsInstagram />
            </div>

            <CgMenuRight 
                className='kamiliaNav__mobileIcon'
                onClick={handleClick}
            />
        </nav>
     );
}
 
export default KamiliaNav;