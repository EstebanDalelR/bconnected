import React, { useState } from 'react';

const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        let goog = `https://script.google.com/macros/s/AKfycbwNAzJIdi2Yu7tGktsL9uPu8L6stCtcTJ188VIvz_e4ENAum75d/exec?Nombre=${name}&Email=${email}`;
        const resp = await fetch(goog);
        setIsLoading(false);

        if (resp.status === 200) {
            document.getElementById("downloadPortfolio").click();
        }

        setName('');
        setEmail('');
        setAcceptTerms(false);
    }

    return (
        <form 
            className="mail-list-signup"
            onSubmit={handleSubmit}
            autoComplete="off"
        >
            <div className="row">
                <div className="col-md-3 col-sm-4 col-md-offset-3 col-sm-offset-2">
                    <input 
                        className="signup-name-field validate-required" 
                        type="text" 
                        placeholder="Nombre"
                        value={name}
                        onChange={event => setName( event.target.value ) }
                    />
                </div>

                <div className="col-md-3 col-sm-4">
                    <input 
                        className="signup-email-field validate-required validate-email" 
                        type="email" 
                        placeholder="Correo"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div className="col-md-12 col-md-offset-0 col-sm-4 col-sm-offset-4 text-center">
                    <div className="text-white label-text-conditions">
                        <a href="/PrivacyPoliciesPage" className="text-white">Acepto la política de uso de datos</a> &#32;
                        <label className="icon-check-label">
                            <i className={`icon ${acceptTerms ? 'icon_circle-slelected' : 'icon_circle-empty'}`}></i>
                            <input
                                className="hide"
                                type="checkbox"
                                checked={acceptTerms}
                                onChange={event => setAcceptTerms(event.target.checked)}
                            />
                        </label>
                    </div>
                </div>

                <div className="col-md-12 col-md-offset-0 col-sm-4 col-sm-offset-4 text-center">
                    <input 
                        type="submit" 
                        className="btn btn-primary btn-filled"
                        disabled={!acceptTerms || isLoading}
                        value="Registrar"
                    />
                </div>
            </div>
            {/* <!--end of row--> */}
        </form>
    );
};

export default RegisterForm;