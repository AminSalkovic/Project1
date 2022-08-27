import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import * as FaIcons from 'react-icons/fa'
import * as MdIcons from 'react-icons/md'
import MenuItems from '../MenuItems'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-icons">
            <FaIcons.FaFacebookF className='ft-icons'/>
        </div>
        <div className="footer-icons">
            <FaIcons.FaTwitter className='ft-icons'/>
        </div>
        <div className="footer-icons">
            <MdIcons.MdEmail className='ft-icons'/>
        </div>
        <ul className='footer-ul'>
           {MenuItems.map((item,index)=>{
              return(
                <li  key={index} className='footer-list'>
                    <Link to={item.path} className='footer-links'>
                         <span>{item.title}</span>
                    </Link>
                </li>
              )
           })}
        </ul>
        <div className="footer-icons">
            
        </div>
    </div>
  )
}

export default Footer