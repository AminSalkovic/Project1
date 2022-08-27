import React from 'react'
import { Link } from 'react-router-dom'
import './Dropdown.css'
import  MenuItems from './MenuItems'

const Dropdown = () => {
  return (
    <div className="dropdown">
         {MenuItems.map((item,index)=>{
            return(
                <>
                <ul>
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                        <span>{item.title}</span>
                    </Link>
                  </li>
                </ul>
                </>
            )
         })}
    </div>
  )
}

export default Dropdown