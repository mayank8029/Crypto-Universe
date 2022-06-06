import React from 'react'
import { Switch,Route,link } from 'react-router-dom';
import { Layout,Typography,space } from 'antd';

import Navbar from './components/Navbar';
import Main from './components/Main';
import "./App.css"

import Footer from './components/Footer';

const App = () => {
  return (
     <>
     <div className='app'>
     <Navbar/>
     
     <div className='mainFooter'>
     <Main/>
     
     <Footer/>
     </div>
     </div>
  </>
  )
}

export default App