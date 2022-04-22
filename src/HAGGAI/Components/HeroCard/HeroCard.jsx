import React from 'react'
import './HeroCard.css';
// import personIcon from './assets/heroCardPersonIcon.png'
// import calenderIcon from '../assets/heroCardCalenderIcon.png';
import personIcon from '../../assets/heroCardPersonIcon.png'
import calenderIcon from '../../assets/heroCardCalenderIcon.png'
import PstAdeboye from '../../assets/pastorAdeboye.png'

const HeroCard = () => {
  return (
    <div className='heroCard'>
    {/* first */}
    <div>
      <p>Let There be Light</p>

      <span> <img src={personIcon} alt="personIcon" /> Pastor E.A Adeboye</span> <br />
      <span> <img src={calenderIcon} alt="calenderIcon" /> Jan 28, 2022</span>
    </div>

    {/* second */}
    <div>
      {/* <p>second section</p> */}
      <img src={PstAdeboye} alt="pastor" />
    </div>
    {/* end of second */}
  </div>
  )
}

export default HeroCard