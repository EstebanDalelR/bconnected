import React from 'react';
import PropTypes from 'prop-types';

const AppFooter = () => {
    return (
        <div className="footer-container">


            <footer className="short bg-secondary-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-sm-12 col-xs-12">
                            <span className="sub">B-Connected. Todos los Derechos reservados.</span>
                            <ul>
                                <li><a href="/PrivacyPoliciesPage">Políticas de privacidad</a></li>
                                <li><a href="tel:+0317456335">Teléfono: 7456335</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2 col-sm-12 col-xs-12 text-right">
                            <ul className="social-icons">
                                <li>
                                    <a href="https://twitter.com/b_connectedco">
                                        <i className="icon social_twitter"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.facebook.com/B-connectedco-410423266231075/">
                                        <i className="icon social_facebook"></i>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.instagram.com/bconnectedco/">
                                        <i className="icon social_instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--end of row--> */}
				</div>
                {/* <!--end of container--> */}
			</footer>
        </div>
    );
};

AppFooter.propTypes = {
    
};

export default AppFooter;