import { Col, Row, Statistic } from 'antd'
import {  Link } from 'react-router-dom'
import { useGetCryptosQuery } from '../services/CryptoApi'
import millify from 'millify'
import React from 'react'
import { Typography } from 'antd'
import './Homepage.css'
import Cryptocurrencies from './Cryptocurrencies'
import News from './News'

// millify convert the numbers in the more readable formater


const { Title } = Typography;


const Homepage = () => {

const {data , isFetching} = useGetCryptosQuery(10);
const globalStats = data?.data?.stats;

if (isFetching) return 'Loading....'
console.log(data); 

  return (
    <div className='home-container'>
    <h1>Global Crypto Stats </h1>

    <Row>
    
    
    <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
    
    <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>
    
    <Col span={12}><Statistic title="Total Market Cap " value={millify(globalStats.totalMarketCap)}/></Col>
    
    <Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>
    
    <Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)}/></Col>
    </Row>


    <div className='home-heading-container'>

    <div className='blocks'>
    <div className='Title'>
    <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world </Title>
    <Title level={3} className="show-more show-more-manual"><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>
    <Cryptocurrencies simplified/>
    </div>
   
<div className='blocks'>
<div className='Title'>
<Title level={2} className="home-title">Latest Crypto News </Title>
<Title level={3} className="show-more show-more-manual"><Link to="/news">Show More</Link></Title>
</div>

<News simplified />

</div>

    </div>


    </div>
  )
}

export default Homepage