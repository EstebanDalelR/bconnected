import React from 'react';

import RegisterForm from './RegisterForm';

const Header = () => {
    return (
        <header className="signup">
            <div className="background-image-holder parallax-background">
                <img className="background-image" alt="Background Image" src="/img/hero16.jpg" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 col-sm-12 text-center">
                        <h1 className="text-white">Somos los mejores <strong>Conectando</strong><br />Oportunidades de negocio</h1>
                    </div>
                </div>
                {/* <!--end of row--> */}

                <div className="row text-center">

                    <div className="col-sm-12 text-center">
                        <div className="photo-form-wrapper clearfix">
                            <RegisterForm />
                        </div>
                        {/* <!--end of photo form wrapper--> */}

                        <span className="text-white">Te enviaremos una copia mensual a tu correo</span>
                    </div>

                </div>
                {/* <!--end of row--> */}

            </div>
            {/* <!--end of container-->	 */}
        </header>
    );
};

export default Header;