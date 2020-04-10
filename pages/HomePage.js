import React from 'react';

// Next Components
import AppHead from '../components/AppHead';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import AppFooter from '../components/AppFooter';

const HomePage = () => {
    return (
        <>
            <AppHead />

            <aside>

                <NavBar />

                {/* <!-- ========================================= --> */}
                {/* <!-- Content --> */}
                {/* <!-- ========================================= --> */}
                <div className="main-container" id="inicio">

                    <Header />

                    <section className="duplicatable-content">
			
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <h1>Modelo de negocio de B-Connected</h1>
                                </div>
                            </div>
                            {/* <!--end of row--> */}
                
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="feature feature-icon-large">
                                        <div className="pull-left">
                                            <i className="icon icon-genius"></i>
                                        </div>
                                        <div className="pull-right">
                                            <h5>¿A quíen está dirigido?</h5>
                                            <p>
                                                B-CONNECTED conecta por medio de su base de datos actores económicos como: Fondeadores, Inversionistas, Empresarios, Empresas, Emprendedores, entre otros, para el desarrollo de negocios exitosos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end 6 col--> */}
                                
                                <div className="col-sm-6">
                                    <div className="feature feature-icon-large">
                                        <div className="pull-left">
                                            <i className="icon icon-linegraph"></i>
                                        </div>
                                        <div className="pull-right">
                                            <h5>¿Como trabajamos?</h5>
                                            <p>
                                                Compilamos mensualmente oportunidades de negocio en un portafolio que es socializado junto con información de interés para el desarrollo de negocios entre nuestra base de datos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end 6 col--> */}
                                
                                <div className="col-sm-6">
                                    <div className="feature feature-icon-large">
                                        <div className="pull-left">
                                            <i className="icon icon-tools-2"></i>
                                        </div>
                                        <div className="pull-right">
                                            <h5>¿Tiene algún costo?</h5>
                                            <p>
                                                Si por medio de nuestra conexión se realiza, celebra o fondea un negocio, B-CONNECTED cobrará el fee descrito en el contrato a la empresa receptora de los fondos. En ningún momento B- CONNECTED cobra ni presta un servicio al fondeador.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end 6 col--> */}
                                
                                <div className="col-sm-6">
                                    <div className="feature feature-icon-large">
                                        <div className="pull-left">
                                            <i className="icon icon-desktop"></i>
                                        </div>
                                        <div className="pull-right">
                                            <h5>¿Quienes interactuan?</h5>
                                            <p>
                                                B-CONNECTED no estructura, asesora o realiza estudios, ni interviene en las negociaciones realizadas entre las partes conectadas, estas son de responsabilidad y competencia entre las partes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--end 6 col--> */}
                                
                            </div>
                            {/* <!--end of row--> */}
                        </div>
                    
                    </section>


                    <section className="no-pad clearfix">
				
                        <div className="col-md-6 col-sm-12 no-pad">
                        
                            <div className="feature-box">
                            
                                <div className="background-image-holder overlay">
                                    <img className="background-image" alt="Background Image" src="/img/header2.jpg" />
                                </div>
                                
                                <div className="inner">
                                    <h1 className="text-white">contacta con nosotros.</h1>
                                    <p className="text-white">
                                        Puedes escribirnos si tienes alguna duda o si requieres que nos contactemos contigo
                                    </p>
                                    <a href='mailto:info@b-connected.co' className="btn btn-primary">Envía un correo</a>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="col-md-6 col-sm-12 no-pad">
                        
                            <div className="feature-box">
                            
                                <div className="background-image-holder overlay">
                                    <img className="background-image" alt="Background Image" src="/img/hero8.jpg"/>
                                </div>
                                
                                <div className="inner">
                                    <h1 className="text-white">Nuestro Protafolios.</h1>
                                    <p className="text-white">
                                        Tenemos un portafolios extenso con servicios y clientes que esperan por contacto contigo,
                                    </p>
                                    <a className="btn btn-primary btn-white" href='static/pdf/PortafolioBConnectedENE20.pdf' download id='downloadPortfolio'>Descargar</a>
                                </div>
                            </div>
                        </div>
                        
                    </section>

                    
                    <section className="pure-text-centered">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
                                    <span className="sub alt-font">full service digital agency</span>
                                    <h1><strong>Politica de B-CONNECTED para Negocios</strong></h1>
                                    <p className="lead">
                                        En B-CONNECTED aclaramos que no prestamos ningún tipo de asesoría o estructuración a empresas, únicamente los conectamos con posibles fondeadores para el desarrollo de negocios propuestos por ellos y en dado caso se concrete un negocio por la conexión B- CONNECTED cobrara el fee descrito en le contrato ( Adjunto PROXIMAMENTE )
							        </p>
                                </div>
                            </div>
                            {/* <!--end of row--> */}

                        </div>
                        {/* <!--end of container--> */}
                    </section>


                    <section className="side-image clearfix">
				
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 content col-sm-12 clearfix">
                                    <h4 className="subtitle-margin">Todo negocio que desee ingresar en nuestro portafolio de negocios debe cumplir con las siguientes condiciones:</h4>
                
                                    <ul className="blog-snippet-2">
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">Desarrollar un actividad 100 % legal sin vicios ocultos.</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">No solicitar un cupo de fondeo superior al 50 % de sus PATRIMONIO.</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">No tener más de 10 contratos suscritos como deuda o fondeadores externos.</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">Tener ventas (No conseguimos fondeo a proyectos sin respaldo en ventas).</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">Que ninguno de sus socios este vinculado con las listas SARLAFT ni en ninguna actividad ilegal.</a>
                                            </div>
                                        </li>
                                    </ul>	
                                    
                                </div>

                                <div className="col-md-6 content col-sm-12 clearfix">
                                    <h4 className="subtitle-margin">Para solicitar el ingreso a nuestro portafolio debe enviar un correo electrónico a ( Correo) con los siguientes datos:</h4>
                
                                    <ul className="blog-snippet-2">
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">Teaser (Resumen de la oportunidad de negocio).</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">Estados financieros a corte más reciente.</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">Camara de comercio y composición accionaria o en caso de actuar como persona natural fotocopia de la cedula de ciudadanía.</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">ontrato corretaje firmado (descargar).</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <i className="icon icon-pencil"></i>
                                            </div>
                                            <div className="title">
                                                <a href="#">Datos de contacto (dirección oficina, Correo electrónico , Numeros de teléfono).</a>
                                            </div>
                                        </li>
                                    </ul>	
                                    
                                </div>
                                {/* <!--end of row--> */}
                            </div>
                            {/* <!--end of container--> */}
                        </div>
                        
                    </section>


                    <section className="side-image text-heavy clearfix">
                        
                        <div className="container">
                        
                            <div className="row">
                        
                                <div className="col-md-12 col-sm-12 content clearfix text-center">
                                    <h1>Política de B-CONNECTED para Fondeadores</h1>
                                    <div className="col-sm-6 no-pad-left feature">
                                        <p>
                                            En B-CONNECTED aclaramos que no prestamos ningún tipo de asesoría, estructuración o servicio a los interesados en fondear los negocios adjuntos en el portafolio y por ende no hay ningún cobro ni responsabilidad por parte de nosotros hacia ustedes.
                                        </p>
                                    </div>
                                
                                    <div className="col-sm-6 no-pad-left feature">
                                        <p>
                                            Todos los negocios en nuestro portafolio están brevemente resumidos y si desea mayor información puede solicitarla respondiendo nuestros correos o al mail info@b-connected.co con el nombre del proyecto del cual desea mayor información. Este será respondido con información mas detallada de la oportunidad y nuestro documento de indemnidad. Para agendar una reunión con los dueños del proyecto debe enviar el documento (descargar) y horarios de disponibilidad de agenda.
                                        </p>
                                    </div>
                                    <div className="col-sm-6 no-pad-left feature">
                                        <p>
                                            Lo invitamos a suscribirse a nuestra base de datos y descargar el portafolio en el este link donde encontrará toda la información mes a mes de los mejores negocios.
                                        </p>
                                    </div>
                                
                                    <div className="col-sm-6 no-pad-left feature">
                                        <p>
                                            B- CONNECTED se limitara a poner en contacto las partes y no intervendrá en los estudios, negociaciones, contratos, riesgos y garantías entre las partes presentadas. Confiamos plenamente en los negocios presentados pero no asumimos ninguna responsabilidad por el resultado de estos. Recomendamos que cada fondeador realice el estudio que considere necesario.
                                        </p>
                                    </div>
                                </div>
                            
                            </div>
                            {/* <!--end of row--> */}
                        
                        </div>
                    </section>


                    <section className="duplicatable-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 text-center">
                                    <h1>Como ubicarnos</h1>
                                </div>
                            </div>
                            <section className="map">
                                <div className="map-holder">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.4869904494576!2d-74.06253968523775!3d4.685099396596895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ae9ecb66e3f%3A0x4a7596d9d9e674f4!2sCra.%2047a%20%2396-41%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1586478885002!5m2!1ses!2sco" width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                </div>
                            </section>
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

export default HomePage;