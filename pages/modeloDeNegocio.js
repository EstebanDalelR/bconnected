import Layout from '../components/MyLayout.js'
import ModeloDeNegocioText from '../components/modeloDeNegocioText.js'

export default function ModeloDeNegocio () {
  return (
    <Layout image={'footerModeloDeNegocio.png'}>
      <div>
        <style jsx>{`
        div {
          background-image: linear-gradient(black, grey);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
        p {
          text-decoration: none;
          font-family: 'Arial';
          color: white;
        }
      `}</style>
        <img src='static/images/modeloDeNegocio.png' />
        <ModeloDeNegocioText />
      </div>
    </Layout>
  )
}
