import React from 'react';

// Next Components
import AppHead from '../components/AppHead';
import NavBar from '../components/NavBar';
import AppFooter from '../components/AppFooter';

const PrivacyPoliciesPage = () => {
    return (
        <>
            <AppHead />

            <aside>

                <NavBar />

                {/* <!-- ========================================= --> */}
                {/* <!-- Content --> */}
                {/* <!-- ========================================= --> */}
                <div className="main-container" id="inicio">

                    <section className="strip bg-secondary-1 policy-header">
                        <div className="container">
                            <div className="row clearfix">
                                <div className="col-sm-6 col-xs-12 pull-left">
                                    <h3 className="text-white"><strong>Contacta con nosotros.</strong></h3>
                                </div>

                                <div className="col-sm-4 col-xs-12 pull-right text-right">
                                    <a href="/" className="btn btn-primary btn-white">Registrarse</a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="feature-selector">
				
                        <div className="container">
                            <ul className="selector-content">
                                <li className="clearfix active">
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <h1>Politicas de privacidad</h1>
                                        </div>
                                    </div>
                                    {/* <!--end of row--> */}
                                    
                                    <div className="row">
                                        <div className="col-sm-12 text-justify">
                                            <p className="lead">
                                                Nota Legal: Aviso de Privacidad  B- Connected  (en adelante, la “Compañía”), en virtud de lo 
                                                definido en la ley 1581 de 2012, el decreto 1377 de 2013 y nuestra política de protección de datos 
                                                personales, informa que los datos personales que sean suministrados por clientes, proveedores, 
                                                funcionarios, intermediarios y demás partes interesadas, serán tratados en cumplimiento de la 
                                                normatividad mencionada con anterioridad y demás normas que la modifiquen y/o complementen. Al 
                                                responder este correo, usted autoriza a la Compañía a tratar sus datos personales de acuerdo con 
                                                la legislación vigente en nuestro país. El responsable del tratamiento de sus datos personales es 
                                                la Compañía, domiciliada en la ciudad de Bogotá D.C., quien recogerá y tratará sus datos personales 
                                                con el fin de dar cumplimiento a su objeto social, incluyendo pero sin limitarse a lo siguiente: a. 
                                                Informar sobre nuestras promociones,ofertas, novedades, productos y servicios, alianzas, concursos, 
                                                contenidos actuales y futuros relacionados con los eventos, concursos, actividades de promoción 
                                                y otras finalidades comerciales directa o indirectamente relacionadas con nuestra actividad;
                                                b. Informar sobre nuevos productos o servicios que estén relacionados con el o los contratado(s) 
                                                o adquirido(s) o cambios en los mismos;c. Dar cumplimiento a obligaciones contraídas con nuestros 
                                                clientes, proveedores, y empleados Titulares de Información;  d. Evaluar la calidad del servicio, 
                                                e. Realizar estudios internos sobre hábitos de consumo y estudios estadísticos que permitan diseñar 
                                                mejoras en los productos y/o en los servicios prestados; f. Facilitar la correcta ejecución de 
                                                las compras y prestación de los servicios contratados; e. Gestionar tareas básicas de administración. 
                                                La base de datos busca tener actualizada la información con el fin de que la relación con clientes, 
                                                proveedores, contratantes y/o demás terceros interesados se desarrolle de manera adecuada. El 
                                                Tratamiento de los datos personales no se limita a los eventos antes descritos, sino que el 
                                                Tratamiento de los mismos, se realizará en forma general para el desarrollo del objeto social de la 
                                                Compañía y para cumplir las obligaciones correspondientes. Usted podrá ejercer los derechos que le 
                                                asisten como titular, siguiendo las políticas y procedimientos  conforme a la ley colombiana , si 
                                                desea salir de nuestra base de datos podrá hacerlo solicitandolo en un correo, para dudas e 
                                                inquietudes relacionadas con estos temas puede escribirnos a: <a href="mailto:info@b-connected.co">info@b-connected.co</a>
                                            </p>	
                                        </div>
                                    </div>
                                    {/* <!--end of row--> */}
                                </li>
                                
                                {/* <!--end of individual feature content--> */}
                                
                            </ul>
                        </div>
			</section>

                </div>


                <section className="strip bg-secondary-1">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-sm-6 col-xs-12 pull-left">
                                <h3 className="text-white">Somos los mejores <strong>Conectando</strong> Oportunidades de negocio</h3>
                            </div>

                            <div className="col-sm-6 col-xs-12 pull-right text-right">
                                <a href='https://m.me/410423266231075' className="btn btn-primary btn-white">
                                    Escríbanos por Facebook
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <AppFooter />

            </aside>
        </>
    );
};

export default PrivacyPoliciesPage;