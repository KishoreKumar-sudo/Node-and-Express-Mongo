import React from 'react'
import './InitiativeCard.css'
import cardImg1 from '../../assets/card-1.png'
import cardImg2 from '../../assets/card-2.png'
import cardImg3 from '../../assets/card-3.png'
import cardImg4 from '../../assets/card-4.png'
import cardImg5 from '../../assets/card-5.png'
const InitiativeCard = () => {
  return <>
    <div className="card-div">
      <div><h1>TECH FOR TEENS -A RUBIXE @ INITIATIVE</h1></div>
      <div className='card-content'>

        <div className='card-1'>

          <div className="card-head radius-top" style={{ backgroundColor: '#1d2d60' }}>
            <div className="card-circle"><h3>01</h3></div>
          </div>
          <div className="card-body">
            <img src={cardImg1} alt="" />
            <div className='card-text'> Introducing Al to children in an age appropriate manner.</div>
          </div>
          <div className="card-tail"></div>
        </div>

        <div className='card-2'>
          <div className="card-tail"></div>
          <div className="card-body">
            <div className='card-text'> Gain awareness on Al and build an interactive story around it</div>
            <img src={cardImg2} alt="" />
          </div>
          <div className="card-head radius-bottom card-head-down" style={{ backgroundColor: '#9d2057' }}><div className="card-circle"><h3>02</h3></div></div>
        </div>
        <div className='card-1'>
          <div className="card-head radius-top" style={{ backgroundColor: '#e35e13' }}><div className="card-circle"><h3>03</h3></div></div>
          <div className="card-body">
            <img src={cardImg3} alt="" />
            <div className='card-text'> Acquire programming skills in a user-friendly format</div>
          </div>          
          <div className="card-tail"></div>
        </div>
        <div className='card-2'>
          <div className="card-tail"></div>
          <div className="card-body">
            <div className='card-text'> Exposure to mini projects on diverse topics</div>
            <img src={cardImg4} alt="" />
          </div>          
          <div className="card-head radius-bottom card-head-down" style={{ backgroundColor: '#195b37' }}><div className="card-circle"><h3>04</h3></div></div>
        </div>
        <div className='card-1'>
          <div className="card-head radius-top" style={{ backgroundColor: '#b77d33' }}><div className="card-circle"><h3>05</h3></div></div>
          <div className="card-body">
            <img src={cardImg5} alt="" />
            <div className='card-text'> Train the teachers programme</div>
          </div>          
          <div className="card-tail"></div>
        </div>
      </div>
    </div>
  </>
}

export default InitiativeCard