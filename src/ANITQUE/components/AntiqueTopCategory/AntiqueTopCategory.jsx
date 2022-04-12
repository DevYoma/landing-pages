import React from 'react';
import AntiqueCarouselButton from '../../miniComponents/AntiqueCarouselButton/AntiqueCarouselButton';
import './AntiqueTopCategory.css';
import LeftCarousel from '../../assets/LeftCarousel.png'
import RightCarousel from '../../assets/RightCarousel.png'
import Preview from '../../assets/preview.png';
import Skull from '../../assets/skull.png';
import Angel from '../../assets/angel.png';
import Chair from '../../assets/chair.png';
import Watch from '../../assets/watch.png';
import Furniture from '../../assets/furniture.png';

const AntiqueTopCategory = () => {
    return ( 
        <div className="antiqueTopCategory container">
            <h1>Top Categories</h1>

            <div className='row'>
                <p>Party we years to order allow asked of. We so opinion friends me message as delight.</p>
                <div className='antiqueTopCategory__carouselButtons'>
                    <AntiqueCarouselButton image={LeftCarousel} background="white" />
                    <AntiqueCarouselButton image={RightCarousel}/>
                </div>
            </div>

            <div className="antiqueTopCategory__flexContainer">
                <div className="">
                    <div>
                        <img src={Preview} alt="Pic1" />
                        <div className="img__num">
                            122
                        </div>

                        <div className="img__details">
                            <h2>Weapons</h2>
                            <p>Worefall</p>
                        </div>
                    </div>
                    <div className='skull__section'>
                        <img src={Skull} alt="Pic2" />
                        
                        <div className="img__num">
                            122
                        </div>

                        <div className="img__details">
                            <h2>Weapons</h2>
                            <p>Worefall</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <img src={Angel} alt="Angel" />

                        <div className="antique__number">
                            <p>35</p>
                        </div>

                        <div className="angel">
                            <h1>Statues</h1>
                            <p>Worefall</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div>
                        <img src={Chair} alt="Chair" />

                        {/* <div className="third__imgNum">
                            122
                        </div>

                        <div className="third__imgDetails"> 
                            <h2>Keep</h2>
                            <p>Worefall</p>
                        </div> */}
                    </div>

                    <div className="Third__grid row">
                        <div>
                            <img src={Watch} alt="Watch" />

                            <div className="img__num">
                                122
                            </div>

                            <div className="img__details"> 
                                <h2>Keep</h2>
                                <p>Worefall</p>
                            </div>
                                
                        </div>

                        <div>
                            <img src={Furniture} alt="furniture" />

                            <div>122</div>

                            <div className=""> 
                                <h2>Keep</h2>
                                <p>Worefall</p>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            
        </div>
     );
}
 
export default AntiqueTopCategory;