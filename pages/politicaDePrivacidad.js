import Layout from '../components/MyLayout.js'
import Jumbotron from '../components/Jumbotron.js'

export default function PoliticaDePrivacidad () {
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
        .contentHolder {
          background-color: black;
          overflow: auto;
        }`
      }</style>
      <Jumbotron image='politicaDePrivacidad.png' />
      <div className='contentHolder'>
        <p>
        Nota Legal: Aviso de Privacidad B- CONNECTED. (en adelante, la “Compañía”), en virtud de lo definido en la ley 1581 de 2012, el decreto 1377 de 2013 y nuestra política de protección de datos personales, informa que los datos personales que sean suministrados por clientes, proveedores, funcionarios, intermediarios y demás partes interesadas, serán tratados en cumplimiento de la normatividad mencionada con anterioridad y demás normas que la modifiquen y/o complementen. Al responder este correo, usted autoriza a la Compañía a tratar sus datos personales de acuerdo con la legislación vigente en nuestro país. El responsable del tratamiento de sus datos personales es la Compañía, domiciliada en la ciudad de Bogotá D.C., quien recogerá y tratará sus datos personales con el fin de dar cumplimiento a su objeto social, incluyendo pero sin limitarse a lo siguiente: a. Informar sobre nuestras promociones,ofertas, novedades, productos y servicios, alianzas, concursos, contenidos actuales y futuros relacionados con los eventos, concursos, actividades de promoción y otras finalidades comerciales directa o indirectamente relacionadas con nuestra actividad; b. Informar sobre nuevos productos o servicios que estén relacionados con el o los contratado(s) o adquirido(s) o cambios en los mismos;c. Dar cumplimiento a obligaciones contraídas con nuestros clientes, proveedores, y empleados Titulares de Información; d. Evaluar la calidad del servicio, e. Realizar estudios internos sobre hábitos de consumo y estudios estadísticos que permitan diseñar mejoras en los productos y/o en los servicios prestados; f. Facilitar la correcta ejecución de las compras y prestación de los servicios contratados; e. Gestionar tareas básicas de administración.La base de datos busca tener actualizada la información con el fin de que la relación con clientes, proveedores, contratantes y/o demás terceros interesados se desarrolle de manera adecuada. El Tratamiento de los datos personales no se limita a los eventos antes descritos, sino que el Tratamiento de los mismos, se realizará en forma general para el desarrollo del objeto social de la Compañía y para cumplir las obligaciones correspondientes. Usted podrá ejercer los derechos que le asisten como titular, y solicitar de manera respetuosa la desvinculacion de nuestra base de datos , resolver dudas e inquietudes relacionadas escribiendo un correo a : info@b-connected.co . Es importante mencionar que el ejercicio de sus derechos no es requisito previo ni impide el ejercicio de otro derecho y cualquier modificación al presente aviso le será notificado a través de los medios que disponga la Compañía para tal fin. En dado caso que se vayan a recopilar datos sensibles, las respuestas a las preguntas que versen sobre este tipo de datos serán de carácter facultativo.
        </p>
      </div>
    </Layout>
  )
}
