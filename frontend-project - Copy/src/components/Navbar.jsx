import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
import * as BsIcons from 'react-icons/bs'
import * as MdIcons from 'react-icons/md'
import * as GiIcons from 'react-icons/gi'
import * as VscIcons from 'react-icons/vsc'
import Dropdown from './Dropdown'
import Searchform from './Searchform'



const Navbar = () => {
    const[dropdown,setDropdown]=useState(false)
    const[click,setClick]=useState(true)
    const[search,setSearch]=useState(false)

    const clickDropdown=()=>{
      setDropdown(!dropdown)
       setClick(!click)
    }

    const clickSearch =()=>{
        setSearch(!search)
    }


  return (
    <>
    <nav className="navbar">
    <ul className='ul-wireless'>
            <li className="nav-item">
               <Link to='/' className='nav-links'>
                   <span className='wireless'>WIRELESS</span>  <span>MEDIA</span>
               </Link>
            </li>
    </ul>
         <ul className='navbar-ul'>
            <li className="nav-item">
               <Link to='/' className='nav-links'>
              <AiIcons.AiFillHome className='icons1'/>
                   <span className='home'>HOME</span>
               </Link>
            </li>
            <li className='slash'>/</li>
            <li className="nav-item">
               <Link to='/about-us' className='nav-links'>
                    <BsIcons.BsFillQuestionCircleFill className='icons2'/>
                   <span className='about-us'>ABOUT US</span>
               </Link>
            </li>
            <li className='slash'>/</li>
            <li className="nav-item">
               <Link to='/our-work' className='nav-links'>
                <GiIcons.GiGraduateCap className='icons3'/>
                   <span className='our-work'>OUR WORK</span>
               </Link>
            </li>
            <li className='slash'>/</li>
            <li className="nav-item">
               <Link to='/contact' className='nav-links'>
                <MdIcons.MdEmail className='icons4'/>
                   <span className='contact'>CONTACT</span>
               </Link>
            </li>
         </ul>
         <VscIcons.VscThreeBars className={click ? 'bar' : 'bar2' } onClick={clickDropdown} />
         <AiIcons.AiOutlineSearch className='search' onClick={clickSearch} />
    </nav>
         {search && <Searchform/>}
         {dropdown && <Dropdown/>}
    <div className="bottom"></div>
    </>
  )
}

export default Navbar