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

                    <p>Estas serian las politicas</p>

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