import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function SocialIcons () {
  return (
    <div>
      <style jsx>{`
        .icons {
          display: flex;
          justify-content: space-around;
          padding: 2%
        }
        .privacy {
          text-align: center;
          color: white;
          padding: 1%;
        }
        a {
          color: white;
        }
      `}</style>
      <div className='icons'>
        <a href='https://www.instagram.com/bconnectedco/'>
          <FontAwesomeIcon icon={faInstagram} color='white' size='3x' />
        </a>
        <a href='https://www.facebook.com/B-connectedco-410423266231075/'>
          <FontAwesomeIcon icon={faFacebook} color='white' size='3x' />
        </a>
        <a href='https://twitter.com/b_connectedco'>
          <FontAwesomeIcon icon={faTwitter} color='white' size='3x' />
        </a>
        <a href='mailto:info@b-connected.co'>
          <FontAwesomeIcon icon={faEnvelope} color='white' size='3x' />
        </a>
      </div>
      <div className='privacy'>
        <Link href="/politicaDePrivacidad">
          <a>
          Política de Privacidad
          </a>
        </Link>
      </div>
      <div className='privacy'>
        <p>
        B-Connected. Todos los Derechos reservados.
        </p>
      </div>
    </div>
  )
}
