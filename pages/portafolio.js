import Layout from '../components/MyLayout.js'
import Jumbotron from '../components/Jumbotron.js'

export default function Portafolio () {
  return (
    <Layout image={'footerPortafolio.png'}>
      <a href='static/pdf/PortafolioBConnectedJUN19.pdf' download>
        <Jumbotron image='portfolio.png' />
      </a>
    </Layout>
  )
}
