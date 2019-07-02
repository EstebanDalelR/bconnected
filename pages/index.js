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
      `}</style>
      <a href='static/pdf/PortafolioBConnectedJUN19.pdf' download>
        <img src='static/images/portfolio.png' width='100%' />
      </a>
    </Layout>
  )
}
