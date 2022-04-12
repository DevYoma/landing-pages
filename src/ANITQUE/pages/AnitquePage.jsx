import React from 'react';
import './anitque.css'
import AnitqueNav from '../components/AnitqueNavbar/AnitqueNav'
import AntiqueMain from '../components/AntiqueMain/AntiqueMain';
import AntiqueSearchBar from '../components/AntiqueSearchBar/AntiqueSearchBar';
import AntiqueRecentlyAdded from '../components/AntiqueRecentlyAdded/AntiqueRecentlyAdded';
import AntiqueTopCategory from '../components/AntiqueTopCategory/AntiqueTopCategory';
import AntiqueFeedback from '../components/AntiqueFeedback/AntiqueFeedback';
import AntiqueSubscribe from '../components/AntiqueSubscribe/AntiqueSubscribe';
import AntiqueFooter from '../components/AntiqueFooter/AntiqueFooter';

const AnitquePage = () => {
    return ( 
        <div className="anitque">
            <AnitqueNav />
            <AntiqueMain />
            <AntiqueSearchBar />
            <AntiqueRecentlyAdded />
            <AntiqueTopCategory />
            <AntiqueFeedback />
            <AntiqueSubscribe />
            <AntiqueFooter />
        </div>
     );
}
 
export default AnitquePage;