import React from 'react'
import FooterImage from './assets/footer.png'
import FooterPolygon from './assets/footerPolygon.png';
import './HaggaiFooter.css';
import iOS from '../../../HAGGAI/assets/ios.png';
import android from '../../../HAGGAI/assets/android.png';
import haggaiLogo from '../../../HAGGAI/assets/haggaiLogo.png'

const HaggaiFooter = () => {
  return (
    <div className='haggaiFooter'>
        <img src={FooterImage} alt="footerImage" />
        <div className='haggaiFooter__div'>

          <div className="haggaiFooter__haggai">
            <img src={haggaiLogo} alt="logo" /><span>HAGGAI</span>
          </div>

          <div className="haggaiFooter__buttonDiv">
            <button>
              <img src={android} alt="android" />Android
            </button>

            <button>
              <img src={iOS} alt="ios" />iOS
            </button>
          </div>

          <div className='haggaiFooter__name'>
            <p>Built by <b>Oti Temitope Emmanuel</b></p>
          </div>
        </div>
    </div>
  )
}

export default HaggaiFooter