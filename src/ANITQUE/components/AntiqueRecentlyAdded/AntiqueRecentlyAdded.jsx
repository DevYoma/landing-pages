import React from 'react';
import AntiqueCarouselButton from '../../miniComponents/AntiqueCarouselButton/AntiqueCarouselButton';
import './AntiqueRecentlyAdded.css';
import LeftCarousel from '../../assets/LeftCarousel.png'
import RightCarousel from '../../assets/RightCarousel.png'
import AntiqueRecentlyAddedItem from '../../miniComponents/AntiqueRecentlyAddedItem/AntiqueRecentlyAddedItem';
import RAItem1 from '../../assets/RAItem1.png';
import Cart from '../../assets/cart.png';
import Horn from '../../assets/horn.png';


const AntiqueRecentlyAdded = () => {

    const data = [
        {
            image: RAItem1,
            heading: "Any bed yet for travelling",
            year: 1934,
            category: "weapons",
            price: 834.50,
            daysRemaining: 12,
            bids: 14
        },
        {
            image: Cart,
            heading: "Indulgence unpleasing",
            year: 1019,
            category: "Tools",
            price: 769.99,
            daysRemaining: 12,
            bids: 34
        },
        {
            image: Horn,
            heading: "Assistance",
            year: 950,
            category: "Tools",
            price: 939.80,
            daysRemaining: 12,
            bids: 154
        },
        {
            image: RAItem1,
            heading: "Assistance",
            year: 950,
            category: "Tools",
            price: 939.80,
            daysRemaining: 12,
            bids: 154
        },
        {
            image: Cart,
            heading: "Indulgence unpleasing",
            year: 1019,
            category: "Tools",
            price: 769.99,
            daysRemaining: 12,
            bids: 34
        }
    ]

    const mappedData = data.map(item => (
        <AntiqueRecentlyAddedItem item={item}/>
    ))

    return ( 
        <div className="antiqueRecentlyAdded container">
            <h1>Recently Added</h1>
            <div className='row'>
                <p>Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p> 

                <div className="antiqueRecentlyAdded__carouselButtons">
                    <AntiqueCarouselButton image={LeftCarousel} background/>
                    <AntiqueCarouselButton image={RightCarousel}/>
                </div>
            </div>

            <div className="antiqueRecentlyAdded__items">
           
                {/* <AntiqueRecentlyAddedItem  />
                <AntiqueRecentlyAddedItem />
                <AntiqueRecentlyAddedItem />
                <AntiqueRecentlyAddedItem /> */}
                {mappedData}
                

            </div>
        </div>
     );
}
 
export default AntiqueRecentlyAdded;