import React from 'react';
import './VenissaPage.css'
import VenissaVerticalNav from '../Components/VenissaVerticalNav/VenissaVerticalNav';
import VenissaBody from '../Components/VenissaBody/VenissaBody'
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import NotVisible from '../../NOTVISIBLE/NotVisible'


const VenissaPage = () => {
   const { width } = useWindowDimensions()
   if(width < 1300){
      return (
         // <div>Ooops, this page can only be viewed on large</div>
         <NotVisible />
      )
   }else
   
    return ( 
        <div className='venissaPage'>
           <VenissaVerticalNav />

           <VenissaBody />
        </div>
     );

}
 
export default VenissaPage;