import Link from 'next/link'

import Layout from '../components/MyLayout.js'
import Jumbotron from '../components/Jumbotron.js'

export default function Index () {
  return (
    <Layout image={'footerIndex.png'}>
      <Jumbotron />
      <style jsx>{`
        h3 {
          font-family: 'Arial';
          text-decoration: none;
          color: white;
          padding-left: auto;
          padding-right: auto;
        }
        div {
          background: black;  
          text-align: center;
        }
        
        @media screen and (max-width: 600px) {
          .portafolioLink {
            background-image: url(static/images/mobile/portafolioLink.png);
            background-repeat: no-repeat;
            background-size: cover;
            overflow: auto;    
            padding: 1%;
            height: 200px;
          }

        }
        @media screen and (min-width: 600px) {  
          .portafolioLink {
            background-image: url(static/images/web/portfolio.png);
            background-repeat: no-repeat;
            background-position: right bottom;
            background-size: cover;
            background-attachment: scroll;  
            overflow: auto;
            height: 450px;
            padding: 1%
          }
          .contentHolder {
            min-height: 400px;
          }
        }
      `}</style>
      <Link href='/portafolio'>
        <a>
          <div className='portafolioLink' />
        </a>
      </Link>
    </Layout>
  )
}
