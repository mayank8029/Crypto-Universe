
import React from 'react'
import { Layout } from 'antd'
import { Switch,Route,link, Routes } from 'react-router-dom';


import Homepage from './Homepage'
import Cryptocurrencies from './Cryptocurrencies'
import CryptoDetail from './CryptoDetail'
import Exchanges from './Exchanges'
import News from './News'

const Main = () => {
  return (
    <div>
   <Layout>
   <Routes>
   
   <Route exact path="/" element={<Homepage/>} />
   <Route exact path="/exchanges" element={<Exchanges/>}/> 
   <Route exact path="/cryptocurrencies"  element={<Cryptocurrencies/>} /> 
   <Route exact path="/crypto/:coinId"  element={<CryptoDetail/> }/>
   
   <Route exact path="/news" element={<News/>} /> 
   
   
   </Routes>
   
   </Layout>
    
    
    </div>
  )
}

export default Main