import React from 'react';
import NatashaHero from '../Components/NatashaHero/NatashaHero';
import NatashaNav from '../Components/NatashaNav/NatashaNav';

const NatashaPage = () => {
    return ( 
        <div className="natashaMain natashaMain__container">
            <NatashaNav />
            {/* <NatashaMain /> */}
            <NatashaHero />
        </div>
     );
}
 
export default NatashaPage;