import { Card, Col, Row, Button, Space } from 'antd';
import Link from 'next/link';
import React from 'react';

const style = {
    width: 340,
    height: 340,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '25px'
        }

const AllNews = ({allNews}) => {
    
    return (
        
        <Row justify='space-between' gutter={16}>
        {
         allNews.map((news, index)=>(
            <Col    key={index} span={6}>
             <Card
             hoverable
             style={style}
           cover={<img alt="example" src={news.image_url
           } />}>
            <h4>title={news.title}</h4> 
            <h6>{news.description}</h6>
           
            
          
          </Card>
         <Link href={`/news/${news?.id}`}>
         <Button type="primary" style={{marginLeft:'auto', marginRight:'auto', display:'block', width:'80%'}}>More...</Button>
         </Link>
          </Col>
         ))
         }
       
        </Row>
    
    
    )
       /*  <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        </Row>
    ); */
    
};

export default AllNews;