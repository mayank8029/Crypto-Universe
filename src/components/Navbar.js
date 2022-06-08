import React from 'react'
import {Button,Menu,Typography,Avatar} from 'antd';
import {Link} from 'react-router-dom';
import { HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined  } from '@ant-design/icons';
import Logo from '../images/logo.jpg';

import './Navbar.css'

const Navbar = () => {
  return (
  <>
 <div className='navContainer'>
 <div className='logo'><img src={Logo} alt="logo"></img><h1 className='logoName' >Crypto-verse</h1></div>

 <div className='navLink'>
 
<Menu theme='dark'>
<Menu.Item icon={<HomeOutlined/>}>
<Link to ="/">Home</Link>
</Menu.Item>

<Menu.Item icon={<FundOutlined/>}>
<Link to ="cryptocurrencies">Cryptocurrencies</Link>
</Menu.Item>

<Menu.Item icon={<MoneyCollectOutlined/>}>
<Link to ="/exchanges">Exchanges</Link>
</Menu.Item>

<Menu.Item icon={<BulbOutlined/>}>
<Link to ="/news">News</Link>
</Menu.Item>

<Menu.Item icon={<BulbOutlined/>}>
<Link to ="/news" component={Typography.link}   / > News
</Menu.Item>

</Menu>
 </div>
 
 </div>
 

  </>
  )
}

export default Navbar