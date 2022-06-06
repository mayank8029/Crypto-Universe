import { Col, Row, Statistic } from 'antd'
import { useGetCryptosQuery } from '../services/CryptoApi'
import millify from 'millify'
import React from 'react'

const Homepage = () => {

const {data , isFetching} = useGetCryptosQuery();
const globalStats = data?.data?.stats;
if (isFetching) return 'Loading....'
console.log(data); 

  return (
    <div>
    <h1>Global Crypto Stats </h1>

    <Row>
    
    
    </Row>
<Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>

<Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}/></Col>

<Col span={12}><Statistic title="Total Market Cap " value={millify(globalStats.totalMarketCap)}/></Col>

<Col span={12}><Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)}/></Col>

<Col span={12}><Statistic title="Total Market" value={millify(globalStats.totalMarkets)}/></Col>
    </div>
  )
}

export default Homepage