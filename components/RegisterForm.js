import React, { useState } from 'react';

const RegisterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        let goog = `https://script.google.com/macros/s/AKfycbwNAzJIdi2Yu7tGktsL9uPu8L6stCtcTJ188VIvz_e4ENAum75d/exec?Nombre=${name}&Email=${email}`;
        fetch(goog);
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
                    <input 
                        type="submit" 
                        className="btn btn-primary btn-filled" 
                        value="Registrar" 
                    />
                </div>
            </div>
            {/* <!--end of row--> */}
        </form>
    );
};

export default RegisterForm;