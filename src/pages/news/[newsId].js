import RootLayout from '@/components/Layouts/RootLayout';
import { Card, Col, Image, Row } from 'antd';
import React from 'react';

const NewsDetailPage = ({news}) => {

    return (
        <div>
     <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="gutter-row" span={12}>
        <div>
            <Image
            src={news?.image_url}
            width={500}
            height={330}
            alt='news'
            onError={(e) => {
                // Handle error, e.g., show a placeholder image
                console.error('Error loading image:', e);
              }}
            />
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div>
        <Card>
            <h4>title={news.title}</h4> 
            <h6>{news.description}</h6>
            </Card>
        </div>
      </Col>
      
    </Row>
        </div>
    );
};

export default NewsDetailPage;


NewsDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };

  /* export const getStaticPaths = async() =>{
    const res = await fetch(`http://localhost:5000/news`)
    const newses = await res.json() 
   
    const paths = newses.map((news) => ({
        params: { newsId: (news.id).toString() }, 
      }));

    return {
        paths,
        fallback: false, 
         };
}
 */
  export const getServerSideProps = async(context)=> {
    const {params} = context
    const res = await fetch(`http://localhost:5000/news/${params.newsId}`)
    const data = await res.json()

    return{
        props: {
            news: data
        }
    }
  }