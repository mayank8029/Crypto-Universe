
import React from 'react'
import { Layout } from 'antd'
import { Switch,Route,link, Routes } from 'react-router-dom';


import Homepage from './Homepage'
import Cryptocurrencies from './Cryptocurrencies'
import CryptoDetail from './CryptoDetail'

import News from './News'

const Main = () => {
  return (
    <div>
   <Layout>
   <Routes>
   <Route exact path="/" element={<Homepage/>} />
   <Route exact path="/cryptocurrencies"  element={<Cryptocurrencies/>} /> 
   <Route exact path="/news" element={<News/>} /> 
   </Routes>
   </Layout>
    </div>
  )
}

export default Main

// in this jpage we had defined kis path par kya folder open karna hai 
// home page kab open karna hai ?
// crypto currnecies wwala kab open karna hai 
// news wala kab open karna hai 
