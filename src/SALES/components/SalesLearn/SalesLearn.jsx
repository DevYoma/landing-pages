import React from 'react'
// import SalesButton from '../SalesButton/SalesButton';
import SalesButton from '../SalesButton/SalesButton'
import './SalesLearn.css';
import Vector from '../../assets/Vector.png'
import { salesLearnRight, salesLearnLeft } from '../../miniComponent/Learn/Learn'

const SalesLearn = () => {
  const array = [0, 1, 2, 3, 4, 5]
  return (
    <div className="salesLearn salesContainer">
        <h3>What you will learn</h3>

        <div className="salesLearn__list">
          <div className="salesLearn__listLeft">
            {
              salesLearnLeft.map((list) => (
                <div className='salesLearn__items' key={list.id}>
                  <img src={Vector} alt="Icon" />
                  <div>
                    <p>{list.text}</p>
                    {/* <p>UX designer using Figma.</p> */}
                  </div>
                </div>
              ))
            }

          </div>
          <div className="salesLearn__listRight">
           {
              salesLearnRight.map((list) => (
                <div className='salesLearn__items' key={list.id}>
                  <img src={Vector} alt="Icon" />
                  <div>
                    <p>{list.text}</p>
                    {/* <p>UX designer using Figma.</p> */}
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <button className="salesLearnButton">
          Pre-Order
        </button>
    </div>
  )
}

export default SalesLearn


// background: #0029FF;
// border-radius: 15px;
// color: #fff;
// padding: 24.5px 42.5px;
// border: none;
// font-family: 'Poppins', sans-serif;
// font-style: normal;
// font-weight: 700;
// font-size: 24px;
// line-height: 29px;
// cursor: pointer;
// margin-top: 25px;