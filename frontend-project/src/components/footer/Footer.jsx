import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import MenuItems from '../MenuItems'

const Footer = () => {
  return (
    <div className='footer'>
    <ul className='footer-ul-icons'>
        <div className="footer-icons">
            <FaIcons.FaFacebookF className='ft-icons'/>
        </div>
        <div className="footer-icons">
            <FaIcons.FaTwitter className='ft-icons'/>
        </div>
        <div className="footer-icons">
            <MdIcons.MdEmail className='ft-icons'/>
        </div> 
     </ul>
        <ul className='footer-ul'>
           {MenuItems.map((item,index)=>{
              return(
                <li  key={index} className='footer-list'>
                    <Link to={item.path} className='footer-links'>
                         <span className={item.span}>{item.title}</span>
                    </Link>
                </li>
              )
           })}
        </ul>
        <div className="footer-icons">
               <FaIcons.FaLongArrowAltUp className='ft-icons'/>
        </div>
    </div>
  )
}

export default Footer