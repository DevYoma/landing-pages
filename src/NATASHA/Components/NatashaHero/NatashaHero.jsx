import React, { useState } from 'react';
import './NatashaHero.css';
import NatashaHeroImage from '../../assets/Image.png';
import LatestWork1 from '../../assets/latest1.png';
import LatestWork2 from '../../assets/latest2.png';
import LatestWork3 from '../../assets/latest3.png';
// import OpaqueImage from '../../assets/text.png'

const NatashaHero = () => {

    const [images, setImages] = useState([
        {
            id: 1, 
            picture: LatestWork1,
            alt: "latest-photo"
        }, 
        {
            id: 2, 
            picture: LatestWork2,
            alt: "latest-photo"
        },
        {
            id: 3, 
            picture: LatestWork3,
            alt: "latest-photo"
        },
        {
            id: 4, 
            picture: LatestWork1,
            alt: "latest-photo"
        },
        {
            id: 5, 
            picture: LatestWork2,
            alt: "latest-photo"
        },
        {
            id: 6, 
            picture: LatestWork3,
            alt: "latest-photo"
        }
    ])

    return ( 
        <div className="natashaHero container">
            {/* <div className="natashaHero__opaqueImage">
                <img src={OpaqueImage} alt="Opaque stuff" />
            </div> */}
            <div className="natashaHero__leftSection">
                <span>
                    <p>my process</p>
                    <p>client reviews </p>
                    <p>download cv</p>
                </span>
                <img src={NatashaHeroImage} alt="Hero Image" />
            </div>

            <div className="natashaHero__middleSection">
                <p>missed advice my it no sister</p> <br />
                    <hr />
            </div>

            <div className="natashaHero__rightSection">
                <div className="rightSection__absolute">
                    {/* <p>missed advice my it no sister</p>
                    <hr className="rightSection__blueLine" /> */}
                </div>
                <h1 className="natashaHero__rightSectionHeading">
                    Why Me
                </h1>

                <div className="natashaHero__rightSectionParagraphDiv">
                    <p>Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. </p>

                    <p>
                    At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. Detract yet delight written farther his general.
                    </p>
                </div>

                <button>
                    schedule a call
                </button>

                <div className="natashaHero__latestWork">
                    <h2>Latest Work</h2>

                    <div className="natashaHero__latestWorkRow">
                            {images.map(img => (
                                <img  key={img.id} src={img.picture} alt={img.alt} />
                            ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NatashaHero;

