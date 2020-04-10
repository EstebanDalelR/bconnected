import React, { Component } from 'react';
import PropTypes from 'prop-types';

const NavBar = () => {
    return (
        <div className="nav-container">
            <nav className="top-bar overlay-bar">
                <div className="container">

                    {/* <!--end of row--> */}
                    <div className="row nav-menu">
                        <div className="col-sm-3 col-md-2 columns">
                            <a href="/">
                                <img className="logo logo-light" alt="Logo" src="/images/logoHorizontalWhite.png" />
                            </a>
                        </div>

                        <div className="col-sm-9 col-md-10 columns">

                            <ul className="social-icons text-right">
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
            </nav>
        </div>
    );
}

NavBar.propTypes = {

};

export default NavBar;