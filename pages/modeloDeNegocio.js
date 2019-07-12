import Layout from '../components/MyLayout.js'
import Link from 'next/link'

export default function ModeloDeNegocio () {
  return (
    <Layout image={'footerModeloDeNegocio.png'}>
      <div className='contentHolder'>
        <style jsx>{`
        p {
          text-decoration: none;
          font-family: 'Arial';
          color: white;
          text-align: justify;
        }
        .contentHolder {
          background-color: black;
          overflow: auto;
        }
        @media screen and (max-width: 600px) {
          .imageDiv {
            width: 100%;
          }
          .modelText {
            padding: 1%;
            width: 100%;
          }
        }
        @media screen and (min-width: 600px) {  
          .imageDiv {
            width: 40%;
            float: left;
          }
          .modelText {
            width: 50%;
            float: right;
            padding: 2%;
          }
        }
      `}</style>
        <div className='imageDiv'>
          <img src='static/images/modeloDeNegocio.png' width='100%' />
        </div>
        <div className='modelText'>
          <p>
        B - CONNECTED conecta por medio de su base de datos actores económicos como: Fondeadores, Inversionistas,  Empresarios, Empresas, Emprendedores, entre otros, para el desarrollo de negocios exitosos.
          </p>
          <p>
        Compilamos mensualmente oportunidades de negocio en un portafolio que es socializado junto con información de interés para el desarrollo de negocios entre nuestra base de datos (si desea suscribirse puede hacerlo <Link href='/portafolio'>siguiendo este link</Link>)
          </p>
          <p>
        Si por medio de nuestra conexión se realiza, celebra o fondea un negocio, B- CONNECTED cobrará el fee descrito en el contrato a la empresa receptora de los fondos. En ningún momento B- CONNECTED cobra ni presta un servicio al fondeador.
          </p>
          <p>
        B - CONNECTED no estructura, asesora o realiza estudios, ni interviene en las negociaciones realizadas entre las partes conectadas, estas son de responsabilidad y competencia entre las partes.
          </p>
          <p>
        Para mayor información puede contactarse con nosotros al mail: <a href='mailto:info@b-connected.co'>info@b-connected.co</a>
          </p>
        </div>
      </div>
    </Layout>
  )
}
