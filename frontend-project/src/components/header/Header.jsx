import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <div className="preheader">
        <h1>WHO WE ARE</h1>
    </div>
      <div className="header">
        <img src="./images/masina.jpg" alt="masina" className='img1' />
        <div className="text1">
            <h2>Lorem ipsum</h2>
            <p className='p'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, similique rem? Neque.
            </p>
            <button>Show More</button>
        </div>
        <img src="./images/obala.jpg" alt="obala"  className='img1'/>
          <div className="text2">
            <h2>Lorem ipsum</h2>
            <p className='p'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, similique rem? Neque.
            </p>
            <div className="btn">
            <button>Show More</button>
            </div>

          </div>
      </div>
      <div className="preheader">
        <h1>WHAT WE DO</h1>
    </div>
    </>
  )
}

export default Header