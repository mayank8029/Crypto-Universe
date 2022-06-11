 import React from 'react'
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import { Select,Typography,Row, Col ,Card, Avatar } from 'antd'
import moment from 'moment'
import './News.css'
const {Text,Title} = Typography;
const {option}= Select ;

const demoImage='';

 const News = ({simplified}) => {


  const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory:'cryptocurrency', count : simplified? 5: 50})

  console.log(cryptoNews)

  if(!cryptoNews?.value) return 'Loading....';

   return (
    <>
    <div>
    <Row gutter={[24 ,24]}>
    
    {
      cryptoNews.value.map((news ,i)=>(
        <Col  xs ={24} sm={12} lg={8} key={i}>
        
        <Card hoverable className = 'news-card' >

        <a href={news.url} target='_blank'  rel="noreferrer" >
        <div className='news-image-container'>
        
        <Title className='news-title' level={4}>{news.name}</Title>
        <img className="image-news" src={news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
        </div>

        <p>
        {
          news.description  > 10 ? `${news.description.substring(0 ,100)}...` : news.description
        

        }
        
        </p>

        <div className='provider-details'>
        
        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl ||demoImage  }/>


        <Text className='provider-name'> {news.provider[0]?.name}</Text>
        
        </div>

        <Text className='time-of-news'> {moment(news.datePublished).format('ll')}</Text>
        
        </a>

        </Card>
        </Col>

      ))
    }
    
    </Row>


    </div>
    
    </>
   )
 }
 
 export default News