import { useState } from 'react'
import fetch from 'isomorphic-fetch'

import Layout from '../components/MyLayout.js'
import Jumbotron from '../components/Jumbotron.js'
export default function Portafolio () {
  const [personName, setPersonName] = useState('')
  const [personMail, setPersonMail] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  function sendData () {
    let goog = `https://script.google.com/macros/s/AKfycbwNAzJIdi2Yu7tGktsL9uPu8L6stCtcTJ188VIvz_e4ENAum75d/exec?Nombre=${personName}&Email=${personMail}`
    fetch(goog)
    document.getElementById('downloadPortfolio').click()
  }
  return (
    <Layout image={'footerPortafolio.png'}>
      <style jsx>{`
        p {
          text-decoration: none;
          font-family: 'Monserrat';
          color: white;
        }
        label {
          color: white;
          font-family: 'Monserrat';
        }
        h2 {
          text-decoration: none;
          font-family: 'Arial';
          color: white;
        }
        .formHolder {
          overflow: auto;
          text-align: center;
          background-color: black;
        }
        .formHolder div{
          margin: 1%;
        }
        button {
          font-weight: bold;
          color: white;
          background-color: darkgrey;
          padding: 1%;
          border-radius: 10px;
        }
        button:hover {
          background-color: grey;
        }
        input {
          background-color: gray;
          border-radius: 4px;
          height: 2em;
          color: white;
          text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        }
        label {
          height: 2em;
        }
      `}</style>
      <div className='formHolder'>
        <h2>Para recibir una copia mensual de este documento, déjenos sus datos.</h2>
        <div>
          <input
            type='text'
            name='Nombre'
            id='Nombre'
            value={personName}
            onChange={e => setPersonName(e.target.value)}
            placeholder='Nombre' />
        </div>
        <div>
          <input
            type='email'
            name='Email'
            id='Email'
            onChange={e => setPersonMail(e.target.value)}
            value={personMail}
            placeholder='Email' />
        </div>
        <div>
          <label htmlFor='terms'>Acepto la política de uso de datos</label>
          <input
            type='radio'
            name='terms'
            id='terms'
            onClick={e => setAcceptTerms(!acceptTerms)}
            value={acceptTerms}
          />
        </div>
        <div>
          <button onClick={sendData} disabled={!acceptTerms}>Enviar</button>
        </div>
      </div>
      <a href='static/pdf/PortafolioBConnectedJUL19.pdf' download id='downloadPortfolio'>
        <Jumbotron image='portfolio.png' />
      </a>
    </Layout>
  )
}
