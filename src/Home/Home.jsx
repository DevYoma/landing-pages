import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css';
import { FaGithub } from 'react-icons/fa'
import Pic from './assets/efficientWay.png';
import antique from './assets/antique.png'
import kamil from './assets/kamil.png'
import makilo from './assets/maliko.png'
import natasha from './assets/natasha.png'
import venissa from './assets/venissa.png'
import mathelda from './assets/mathelda.png'
import mikey from './assets/mikey.png'
// import Baloon from './assets/HelloThere.png'
import YomaPic from './assets/portPic.png'

const Home = () => {
    const [designs] = useState([
        {
            id: 1,
            name: "Antique",
            img: antique,
            link: "/antique"
        },
        {
            id: 2, 
            name: "Natasha",
            img: natasha,
            link: "/natasha"
        },
        {
            id: 3,
            name: "Venissa",
            img: venissa, 
            link: "/venissa"
        },
        {
            id: 4, 
            name: "Kamilia", 
            img: kamil,
            link: "/kamilia"
        },
        {
          id: 5, 
          name: "Maliko",
          img: makilo,
          link: "/maliko"
        },
        {
          id: 6, 
          name: "Mikey",
          img: mikey,
          link: '/mikey'
        },
        // {
        //   id: 7, 
        //   name: "Mathelda", 
        //   img: mathelda,
        //   link: '/mathelda'
        // },
        // {
        //   id: 8, 
        //   name: "Haggai", 
        //   img: null,
        //   link: "/haggai"
        // }, 
        // {
        //   id: 9, 
        //   name: "Loan App",
        //   img: null, 
        //   link: '/loan'
        // }
    ])

    const handleDesignRouting = (design) => {
      window.open(`https://tenoyomalp.netlify.app${design.link}`, "_self")
      // window.open(`https://tenoyomalp.netlify.app${design.link}`, '_blank')
    }
    
  return (
    
    <React.Fragment>
      <div className='home'>
        <div className="home__repo home__container">
          <p>You can check the repository here <a href="https://github.com/devyoma/landing-pages" target="_blank" >Github</a></p>
        </div>
        <div className="home__hero home__container">

          <div className="home__hero-left">
            <img src={YomaPic} alt="baloon" />
          </div>

          <div className="home__hero-right">
            <h2>Landing Page</h2>
            <h2>React Project</h2>
            <p>Built by <a href="https://devyoma.netlify.app" target="_blank" rel="noreferrer">Yoma</a></p>

            <div className="home__hero-rightReasons">
                <p style={{ textDecoration: "underline", marginBottom: "10px" }}>Reasons why i Built This</p>
                <li>To improve my CSS Skills</li>
                <li>To get better at converting designs to code</li>
                <li>To help and motivate developers just getting started into tech as you can read through the code base...</li>
                <li>To solidify my React JS ⚛️ skills </li>
                <li>I just wanted to give something back to the community so i just figured out that this is one way i can share with the community</li>

              <div className="home__heroThanks">Special Thanks to <a href="https://twitter.com/drtenotea">Tenotea</a>(he provided the designs i converted) and <a href="https://twitter.com/ik_thevine">Divine</a>(helped me design the home page for this project) for their help</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="home__designs home__container">
        <h1>Designs</h1>

        <div className="home__designsFlex">
          {
            designs.map((design) => (
              <div key={design.id} className="home__designFlexItem">
                <p id="home__toolTip">Click to visit {design.name} 🚀</p>
                <img src={design.img} alt={design.name} onClick={() => handleDesignRouting(design)}/>
              </div>
            ))
          }
        </div>
        
      </div>
    </React.Fragment>
  )
}

export default Home





{/* <h1>Welcome to this page</h1>
<p>Built by <a href="https://devyoma.netlify.app"  target="_blank">Yoma</a> </p>
<p>You can check the repository here 
<a href="https://github.com/devyoma/landing-pages" target='_blank'>Github</a>    
</p>  

<h3>My Reasons for Building this</h3>
<ul>
    <li>To improve my CSS Skills</li>
    <li>To get better at translating designs</li>
    <li>To help and motivate developers just getting started into tech as you can read through the code base...</li>
    <li>To solidify my React JS ⚛️ skills </li>
</ul>

<p style={{ fontWeight: "bold" }}>Special thanks to TENOTEA, he has been really helpful</p>

<h1>Designs</h1>

{mappedDesigns} */}