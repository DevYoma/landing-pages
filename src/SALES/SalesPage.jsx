import React from 'react';
import './SalesPage.css';
import SalesNav from './components/SalesNav/SalesNav'
import SalesHero from './components/SalesHero/SalesHero';
import SalesLearn from './components/SalesLearn/SalesLearn';
import SalesStudent from './components/SalesStudent/SalesStudent';
import SalesFooter from './components/SalesFooter/SalesFooter';
import SalesContact from './components/SalesContact/SalesContact';

const SalesPage = () => {
  return (
    <div className='salesPage'>
        <SalesNav />
        <SalesHero />
        <SalesLearn />
        <SalesStudent />
        <SalesFooter />
        <SalesContact />
    </div>
  )
}

export default SalesPage