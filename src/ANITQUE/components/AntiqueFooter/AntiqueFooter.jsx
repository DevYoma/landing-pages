import React from 'react';
import './AntiqueFooter.css'

const AntiqueFooter = () => {
    return ( 
        <div className="antiqueFooter container">
                <div className="col">
                    <h3>Resources</h3>

                    <div className="other__links">
                        <p>Download</p>
                        <p>Help Center</p>
                        <p>Guide Book</p>
                        <p>App Directory</p>
                    </div>
                </div>
            
                <div className="col">
                    <h3>Seboria</h3>

                    <div className="other__links">
                        <p>Why Seboria</p>
                        <p>Our Collection Process</p>
                        <p>Customer Stories</p>
                        <p>Instagram Post</p>
                    </div>
                </div>

                <div className="col">
                    <h3>Company</h3>

                    <div className="other__links">
                        <p>Antique</p>
                        <p>About Seboria</p>
                        <p>Success</p>
                        <p>Information</p>
                    </div>
                </div>

                <div className="col">
                    <h3>Get in Touch</h3>

                    <div className="other__links">
                        <p>Feel free to get in touch with us via email</p>
                        <p></p>
                        <p>shakir260@gmail.com</p>
                    </div>
                </div>
        </div>
     );
}
 
export default AntiqueFooter;