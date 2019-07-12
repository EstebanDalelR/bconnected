import Layout from '../components/MyLayout.js'
import Jumbotron from '../components/Jumbotron.js'

export default function Empresas () {
  return (
    <Layout>
      <style jsx>{`
        p {
          text-decoration: none;
          font-family: 'Arial';
          color: white;
          text-align: justify;
          padding: 1%;
        }
        ol {
          color: white;
        }
        h2 {
          padding: 1%;
          color: white;
        }
        div {
          background-color: black;
          overflow: auto;
          padding: 1%
        }`
      }</style>
      <Jumbotron image='empresas.png' />
      <div>
      <h2>
        POLITICA DE B- CONNECTED PARA NEGOCIOS
      </h2>
      <p>
      En B- CONNECTED aclaramos que no prestamos ningún tipo de asesoría o estructuración a empresas, únicamente los conectamos con posibles fondeadores para el desarrollo de negocios propuestos por ellos y en dado caso se concrete un negocio por la conexión B- CONNECTED cobrara el fee descrito en le contrato ( Adjunto PROXIMAMENTE ) 
      </p>
      <p>
      Todo negocio que desee ingresar en nuestro portafolio de negocios debe cumplir con las siguientes condiciones:
      </p> 
      <ol>
        <li>
        Desarrollar un actividad 100 % legal sin vicios ocultos
        </li>
        <li>
        No solicitar un cupo de fondeo superior al 50 % de sus PATRIMONIO
        </li>
        <li>
        No tener más de 10 contratos suscritos como deuda o fondeadores externos
        </li>
        <li>
        Tener ventas (No conseguimos fondeo a proyectos sin respaldo en ventas )
        </li>  
        <li>
        Que ninguno de sus socios este vinculado con las listas SARLAFT ni en ninguna actividad ilegal
        </li>
      </ol>
      <p>
      Para solicitar el ingreso a nuestro portafolio debe enviar un correo electrónico a ( Correo) con los siguientes datos:
      </p>
      <ol>
      <li>
      Teaser (Resumen de la oportunidad de negocio)
      </li>
      <li>
      Estados financieros a corte más reciente
      </li>
      <li>
      Camara de comercio y composición accionaria o en caso de actuar como persona natural fotocopia de la cedula de ciudadanía
      </li>
      <li>
      Contrato corretaje firmado (Adjunto)
       </li>
       <li>
      Datos de contacto (dirección oficina, Correo electrónico , Numeros de teléfono)
      </li>
      </ol>
      <p>
      Agradecemos su interés en ser parte de nuestro portafolio de negocios y responderemos a su solicitud lo antes posible 
      </p>
      </div>
    </Layout>
  )
}
