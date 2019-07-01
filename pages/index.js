import Link from 'next/link'

import Layout from '../components/MyLayout.js'
import Jumbotron from '../components/Jumbotron.js'

export default function Index () {
  return (
    <Layout>
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
      <div>
        <h3>
          Somos los mejores conectando oportunidades de negocio
        </h3>
      </div>
      <Link href='/portafolio'>
        <img src='static/images/portfolio.png' width='100%' />
      </Link>
    </Layout>
  )
}
