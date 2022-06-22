import React, { useEffect } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card,Row,Col,Input } from 'antd'
 import { useState } from 'react'
import { useGetCryptosQuery } from '../services/CryptoApi';
import './Cryptocurrencies.css'

const Cryptocurrencies = ({simplified}) => {

  const count = simplified ? 10 : 100;


  const {data:cryptosList , isFetching}= useGetCryptosQuery(count);
// useGetcryptoQuerry mai count  dekfine karna padega
 const [cryptoName,setCryptoName]= useState('');

  const [cryptos,setCryptos]=useState(cryptosList?.data?.coins);

  useEffect(()=>{
   
    const filteredData = cryptosList?.data?.coins.filter((coin)=>coin.name.toLowerCase().includes(cryptoName.toLowerCase())
  )

  setCryptos(filteredData);
},[cryptosList,cryptoName]);

  if(isFetching) return 'Loading...'; 

  
  return (
  <>

  {
    !simplified&&(<div className='input-crypto-container'>
      <input className='input-crypto' placeholder='enter currency name ' onChange={(event)=>setCryptoName(event.target.value)}/>
      </div>)
  }

  <Row gutter={[32,32]} className="crypto-card-container">
  {cryptos?.map((currency)=>( 
    <Col xs={20} sm={12} lg={6}
     className="crypto-card" key={currency.id}>
    
    <a target='_blank' href={currency.coinrankingUrl}>
    <Card 
    onClick={currency.coinrankingUrl}
    title={`${currency.rank}. ${currency.name}`}
    extra={<img className='crypto-image' src={currency.iconUrl} alt="img"/>}
    hoverable
     
    >
    <p>Price: {millify(currency.price)}</p>
    <p>marketCap: {millify(currency.marketCap)}</p>
    <p>Price: {millify(currency.change)}%</p>
    </Card>
    
  </a>

    </Col>
  ))}
  
  </Row>

  </>
  )
}

export default Cryptocurrencies