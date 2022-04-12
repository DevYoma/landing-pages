import React from 'react';
import './AntiqueFeedback.css';
import FeedbackLogo from '../../assets/girl.png';
import FeedbackImage from '../../assets/feedbackImg.png';

const AntiqueFeedback = () => {
    return ( 
        <div className="antiqueFeedback container">
            <img src={FeedbackLogo} alt="Img" />



            <div className="antiqueFeedback__right">
                <div>
                    <h2>Buyer's Feedback</h2>
                    <p>Whole front do of plate heard oh ought. His defective</p>
                    <p>nor convinced residence own. Connection has put </p>
                    <p>impossible own apartments boisterous.</p>
                </div>

                <div className="antiqueFeedback__footer row">
                    <img src={FeedbackImage} alt="yo" />
                    <div>
                        <p className="footer__name">AR Shakir</p>
                        <p className="footer__description">UI Designer</p>
                        <p>⭐⭐⭐⭐⭐</p>   
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AntiqueFeedback;
