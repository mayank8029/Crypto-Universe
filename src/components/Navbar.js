import React, { useState } from 'react'
import {Button,Menu,Typography,Avatar} from 'antd';
import {Link, NavLink} from 'react-router-dom';
import { HomeOutlined,BulbOutlined,FundOutlined , MenuOutlined} from '@ant-design/icons';
import Logo from '../images/logo.jpg';
import './Navbar.css'



const Navbar = () => {
  
const [menubar , setMenubar] = useState(false)

  return (
  <>
 <div className='navContainer'>
 <div className='logo'>
 
 <div><img src={Logo} alt="logo"></img></div>
 <div><h1 className='logoName' >Cryptoverse</h1></div>
 
 <div className='hamburger-menu' onClick={()=>setMenubar(!menubar)}><MenuOutlined /></div>
 </div>


 <div className={menubar? 'showNavLink':'navLink'}> 

<Menu theme='dark'>
<Menu.Item icon={<HomeOutlined/>}>
<Link to ="/">Home</Link>
</Menu.Item>

<Menu.Item icon={<FundOutlined/>}>
<Link to ="cryptocurrencies">Cryptocurrencies</Link>
</Menu.Item>


<Menu.Item icon={<BulbOutlined/>}>
<Link to ="/news">News</Link>
</Menu.Item>


</Menu>
 </div>
 
 </div>

 

  </>
  )
}

export default Navbar

// here we are using ant design so we want to go to the documentation about using menu 