import React from 'react';
import './AntiqueRecentlyAddedItem.css'
import RAItem1 from '../../assets/RAItem1.png';


const AntiqueRecentlyAddedItem = ({item}) => {
    return ( 
        <div className="antiqueRecentlyAdded__item">
            <img src={item.image ? item.image : RAItem1} alt="" />

            <h4>{item.heading}</h4>
            <span className="year">{item.year}</span>
            <span> | </span>
            <span className="category">{item.category}</span>

            <div className="antiqueRecentlyAdded__itemMain row">
                <h3>${item.price}</h3>

                <button>
                    View Details
                </button>
            </div>

            <div className="antiqueRecentlyAdded__itemFooter row">
                <p>{item.daysRemaining} bids so far</p>
                <p>Bidding Closes in 12 days</p>
            </div>
        </div>
     );
}
 
export default AntiqueRecentlyAddedItem;