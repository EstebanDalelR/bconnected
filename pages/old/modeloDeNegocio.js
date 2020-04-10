import Layout from '../../components/old/MyLayout.js'
import Link from 'next/link'

export default function ModeloDeNegocio () {
  return (
    <Layout image={'footerModeloDeNegocio.png'}>
      <div className='contentHolder'>
        <style jsx>{`
        p {
          text-decoration: none;
          color: white;
          text-align: justify;
        }
        h2 {
          color: white;
        }

        @media screen and (max-width: 600px) {
          div {
            background-image: url(static/images/mobile/modeloDeNegocioMovil.png);
            background-repeat: no-repeat;
            background-size: cover;
            overflow: auto;    
            padding: 1%
          }

        }
        @media screen and (min-width: 600px) {  
          div {
            background-image: url(static/images/web/modeloDeNegocio.png);
            background-repeat: no-repeat;
            background-position: right bottom;
            background-size: cover;
            background-attachment: scroll;  
            overflow: auto;
            padding: 1%
          }
          .contentHolder {
            min-height: 400px;
          }
        }
      `}</style>
        <h2>
          MODELO DE NEGOCIO DE B- CONNECTED
        </h2>
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
    </Layout>
  )
}
