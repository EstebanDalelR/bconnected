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
          font-family: 'Arial';
          color: white;
        }
        h2 {
          text-decoration: none;
          font-family: 'Arial';
          color: white;
        }
        .formHolder {
          background-image: linear-gradient(black, grey);
          overflow: auto;
          text-align: center;
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
          <label for='terms'>Acepta política de uso de datos</label>
          <input
            type='radio'
            name='terms'
            id='terms'
            onChange={e => setAcceptTerms(true)}
            value={acceptTerms}
          />
        </div>
        <button onClick={sendData} disabled={!acceptTerms}>Enviar</button>
      </div>
      <a href='static/pdf/PortafolioBConnectedJUN19.pdf' download id='downloadPortfolio'>
        <Jumbotron image='portfolio.png' />
      </a>
    </Layout>
  )
}
