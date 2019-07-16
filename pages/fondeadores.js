import Layout from '../components/MyLayout.js'
import Link from 'next/link'

export default function fondeadores () {
  return (
    <Layout image={'footerFondeadores.png'}>
      <style jsx>{`
        p {
          text-decoration: none;
          font-family: 'Arial';
          color: white;
          text-align: justify;
          padding: 1%;
        }
        h2 {
          padding: 1%;
          color: white;
        }
        @media screen and (max-width: 600px) {
          div {
            background-image: url(static/images/mobile/fondeadoresMovil.png);
            background-repeat: no-repeat;
            background-size: cover;
            overflow: auto;    
            padding: 1%
          }
        }
        @media screen and (min-width: 600px) {  
          div {
            background-image: url(static/images/web/fondeadores.png);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: right bottom;
            background-attachment: scroll;  
            overflow: auto;
            padding: 1%
          }
          .contentHolder {
            min-height: 600px;
          }
        }`
      }</style>
      <div className='contentHolder'>
        <h2>
          POLITICA DE B- CONNECTED PARA FONDEADORES
        </h2>
        <p>
          En B- CONNECTED aclaramos que no prestamos ningún tipo de asesoría, estructuración o servicio a los interesados en fondear los negocios adjuntos en el portafolio y por ende no hay ningún cobro ni responsabilidad por parte de nosotros hacia ustedes.
        </p>
        <p>
          Todos los negocios en nuestro portafolio están brevemente resumidos y si desea mayor información puede solicitarla respondiendo nuestros correos o al mail info@b-connected.co con el nombre del proyecto del cual desea mayor información.
          Este será respondido con información mas detallada de la oportunidad y nuestro documento de indemnidad. Para agendar una reunión con los dueños del proyecto debe enviar el documento ( Adjunto PROXIMAMENTE  ) y horarios de disponibilidad de agenda.
        </p>
        <p>
          Lo invitamos a suscribirse a nuestra base de datos y descargar el portafolio en el <Link href='portafolio'><a>este link</a></Link> donde encontrará toda la información mes a mes de los mejores negocios.
        </p>
        <p>
          B- CONNECTED se limitara a poner en contacto las partes y no intervendrá en los estudios, negociaciones, contratos, riesgos y garantías entre las partes presentadas. Confiamos plenamente en los negocios presentados pero no asumimos ninguna responsabilidad por el resultado de estos. Recomendamos que cada fondeador realice el estudio que considere necesario.
        </p>

      </div>
    </Layout>
  )
}
