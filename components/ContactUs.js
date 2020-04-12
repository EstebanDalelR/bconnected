import React from 'react';

const ContactUs = () => {
    return (
        <section className="no-pad clearfix">

            <div className="col-md-6 col-sm-12 no-pad">

                <div className="feature-box">

                    <div className="background-image-holder overlay">
                        <img className="background-image" alt="Background Image" src="/images/Web1.png" />
                    </div>

                    <div className="inner">
                        <h1 className="text-white">contacta con nosotros.</h1>
                        <p className="text-white">
                            Puedes escribirnos si tienes alguna duda o si requieres que nos contactemos contigo
                        </p>
                        <a href='mailto:info@b-connected.co' className="btn btn-primary btn-white">Envía un correo</a>
                    </div>
                </div>

            </div>

            <div className="col-md-6 col-sm-12 no-pad">

                <div className="feature-box">

                    <div className="background-image-holder overlay">
                        <img className="background-image" alt="Background Image" src="/images/Web2.png" />
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
    );
};

export default ContactUs;