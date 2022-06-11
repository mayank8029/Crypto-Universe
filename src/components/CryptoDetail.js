   import React , {useState} from 'react'
   import HTMLReactParser from 'html-react-parser'
   import { useParams } from 'react-router-dom'
   import millify from 'millify'
   import { Col,Row, Typography, select } from 'antd'

   import { useGetCryptoDetailQuery} from '../services/CryptoApi'
 

   const CryptoDetail = () => {

     const {coinId}= useParams();
     const [timePeriod , setTimePeriod] = useState('7d')
    //  const {data, isFetching } = useGetCryptoDetailQuery(coinId)



     return (
       <div>CryptoDetail {coinId}</div>
     )
   }
   
   export default CryptoDetail