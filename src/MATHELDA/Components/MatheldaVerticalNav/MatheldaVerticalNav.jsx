import React from 'react';
import './MatheldaVerticalNav.css';
import Line from '../../assets/MatheldaVerticalNavLine.png';

const MatheldaVerticalNav = () => {
    return ( 
        <div className="matheldaVerticalNav">
            <div className="matheldaVerticalNav__name">
                <h3>mathelda.</h3>
                <span>ui designer</span>
            </div>

            <div className="matheldaVerticalNav__listGroup">
                <div className="matheldaVerticalNav__shortwords">
                    <p>fb</p>
                    <p>tw</p>
                    <p>in</p>
                    <p>
                        <img src={Line} alt="Line" />
                    </p>
                </div>

                <div className="matheldaVerticalNav__navList">
                    <p>my process</p>
                    <p>my clients</p>
                    <p>pricing</p>
                </div>
            </div>
        </div>
     );
}
 
export default MatheldaVerticalNav;