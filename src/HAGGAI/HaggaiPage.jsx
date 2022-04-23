import React from 'react'
import './HaggaiPage.css';
import haggaiLogo from './assets/haggaiLogo.png'
import NavButtonVector from './assets/navButtonVector.png'
import MainPolygon from './assets/HeaderPolygon.png'
import topPolygon from './assets/HeaderSmallPolygon.png'
import Hexagon from './assets/HeaderHexagon.png'
import HeroPhone from './assets/heroPhone.png';
import android from './assets/android.png'
import ios from './assets/ios.png';
import HeroCard from './Components/HeroCard/HeroCard';
import HeroSectionOne from './Components/HeroSectionOne/HeroSectionOne';

const HaggaiPage = () => {

  const rotate = ["left", "right", "normal"]
  const imageColor = ['pink', 'gray', 'blue']

  return (
  <div className="haggaiPage">
      <img src={MainPolygon} alt="polygonHeader" className="mainPolygon" />
      <img src={topPolygon} alt="smallPolygon" className='smalltopPolygon'/>
      <img src={Hexagon} alt="Hexagon" className='hexagonPolygon'/>

      {/* NAVBAR */}
      <nav className='haggaiPage__nav haggai__container'>
        <div>
            <img src={haggaiLogo} alt="logo" /><span className='haggaiPage__navName'>HAGGAI</span>
        </div>

        <button className="haggaiPage__navContact">
            <img src={NavButtonVector} alt="Lego" />Contact Us
        </button>
      </nav>

      {/* HERO SECTION */}
      <div className="haggaiPage__hero haggai__container">
          {/* LEFT */}
          <div className="haggaiPage__heroLeft">
            <div>
                <p>Tortor aenean</p>
                <p>aenean facilisis mauris</p>
            </div>

            <div>
                <p>Consequat est morbi ut diam convallis</p>
                <p>cras nulla enim. Netus justo, in egestas</p>
                <p>nec libero vitae diam at venenatis.</p>
            </div>

            <div className="haggaiPage__heroCTA">
                <button>
                    <img src={android} alt="android" />
                    Android
                </button>

                <button>
                    <img src={ios} alt="ios" />
                    iOS
                </button>
            </div>
          </div>
          {/* LEFT END */}

          {/* RIGHT */}
          <div className="haggaiPage__heroRight">
            <div className="haggaiPage__heroRightDiv">
              <HeroCard />
              <HeroCard />
            </div>
            <img src={HeroPhone} alt="heroPhone" />
          </div>
            {/* RIGHT END */}

      </div>

      {/* END OF HERO */}

      <HeroSectionOne 
        flexDirection={false}
        rotate={rotate[2]}
        image={imageColor[0]}
        // image={}
        // iconImg1={}
        // iconImg2{}
      />

      <HeroSectionOne 
        flexDirection={true}
        rotate={rotate[1]}
        image={imageColor[1]}

      />

      <HeroSectionOne 
        flexDirection={false}
        rotate={rotate[0]}
        image={imageColor[2]}

      />
  </div>
  )
}

export default HaggaiPage