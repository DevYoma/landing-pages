import React, { useState, useEffect } from 'react';
import AntiqueOrangeButton from '../../miniComponents/AntiqueOrangeButton/AntiqueOrangeButton';
import './AnitqueNav.css';
import { CgMenuRight } from 'react-icons/cg'

const AnitqueNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [active, setActive] = useState(false)

    const handleMenuClick = () => {
        setShowMenu(!showMenu)
        setActive(!active)
    }

    return ( 
        <nav className="antique__nav container">
                <p>Siboria<span>.</span></p>
                {/* <ul className='antique__lists active' id={showMenu ? "antique__hidden" : ""}> */}
                <ul className='antique__lists' id={showMenu ? "antique__hidden" : "active"}>
                    <li onClick={() => setShowMenu(false)}>Home</li>
                    <li onClick={() => setShowMenu(false)}>Collections</li>
                    <li onClick={() => setShowMenu(false)}>How We Collect</li>
                    <li onClick={() => setShowMenu(false)}>Sell An Antique</li>
                    <li onClick={() => setShowMenu(false)}>Blog</li>
                </ul>

                {/* <button className="antique__button">
                    Our Collections
                </button> */}
                <div>
                    <AntiqueOrangeButton name="Our Collections"/>
                </div>

                <CgMenuRight 
                    className='antique__navIcon' 
                    onClick={handleMenuClick}
                    // size={"1x"}
                />
        </nav>
     );
}
 
export default AnitqueNav;