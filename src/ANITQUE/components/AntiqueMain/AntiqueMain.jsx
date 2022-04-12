import React from 'react';
import './AntiqueMain.css';
import Main from '../../assets/mainHeader.jpg'
import AntiqueMainRightBadge from '../../miniComponents/AntiqueMainRightBadge/AntiqueMainRightBadge';
import BadgeIcon1 from '../../assets/BadgeIcon1.png'
import BadgeIcon2 from '../../assets/BadgeIcon2.png'
import BadgeIcon3 from '../../assets/BadgeIcon3.png'
import PlayIcon from '../../assets/playIcon.png'
import AntiqueOrangeButton from '../../miniComponents/AntiqueOrangeButton/AntiqueOrangeButton';


const AntiqueMain = () => {
    return ( 
        <div className="antiqueMain container row">
            <div className="antiqueMain__left row">
                <div className="antiqueMain__leftText">
                    <h1>World's Biggest</h1>
                    <h1>Antique Collection</h1>

                    <div className="antiqueMain__left__description">
                        <p>From they fine john he give of rich he. They age and draw</p>
                        <p> draw mrs like. Improving end distrusts may instantly was</p>
                        <p>household applauded incommode.</p>
                    </div>

                    <div className="antiqueMain__left__footer row">
                        <AntiqueOrangeButton name="Discover More" bold="bold"/>
                            <button className='antiqueMain__left__playButton'>
                                <img src={PlayIcon} alt="PlayIcon" />
                            </button>
                            <p>Watch Video</p>
                    </div>
                </div>

                <img src={Main} alt="mainImg" className="antiqueMain__leftImg" />
            </div>

            <div className="antiqueMain__right">
                <AntiqueMainRightBadge img={BadgeIcon1} year="1322" name="year"/>
                <AntiqueMainRightBadge img={BadgeIcon2} year="29" name="Bids so far"/>
                <AntiqueMainRightBadge img={BadgeIcon3} year="China" name="Origin"/>
            </div>
        </div>
     );
}
 
export default AntiqueMain; 