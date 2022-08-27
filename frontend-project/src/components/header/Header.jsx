import React from 'react'
import './Header.css'
import * as BsIcons from 'react-icons/bs'
const Header = () => {
  return (
    <>
    <div className="preheader">
        <h1>WHO WE ARE</h1>
    </div>
      <div className="header">
        <img src="./images/masina.jpg" alt="masina" className='img1' />
        <div className="text">
            <h2>Lorem ipsum</h2>
            <p className='p'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, similique rem? Neque.
            </p>
            <div className="btn">
            <button>SHOW MORE</button>
            </div>
        </div>
        <img src="./images/obala.jpg" alt="obala"  className='img1'/>
          <div className="text">
            <h2>Lorem ipsum</h2>
            <p className='p'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, similique rem? Neque.
            </p>
            <div className="btn">
            <button>SHOW MORE</button>
            </div>
          </div>
      </div>
      <div className="preheader">
        <h1>WHAT WE DO</h1>
    </div>
       <div className="header-icons">
          <div className="div-icons">
            <BsIcons.BsCalculatorFill className='icons-box'/>
          </div>
          <div className="div-icons">
            <BsIcons.BsFillCloudFill className='icons-box'/>
          </div>
          <div className="div-icons">
            <BsIcons.BsClock className='icons-box'/>
          </div>
          <div className="div-icons">
            <BsIcons.BsFillHeartFill className='icons-box'/>
          </div>

       </div>
    </>
  )
}

export default Header