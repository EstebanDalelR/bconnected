import React from 'react';

const Location = () => {
    return (
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
    );
};

export default Location;