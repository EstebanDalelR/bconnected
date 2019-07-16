import Link from 'next/link'
import ResponsiveMenu from 'react-responsive-navbar'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const linkStyle = {
  marginRight: 15,
  paddingTop: '1em',
  fontWeight: 'bold'
}

export default function NavLinks () {
  return (
    <>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        div {
          background: black;
          display: flex;
          justify-content: flex-end;
        }
        a {
          text-decoration: none;
          font-family: 'Monserrat', sans-serif;
          color: white;
        }
        img {
          align: left
        }
        @media screen and (min-width: 600px) {
          div {
            display: inline-block
          }
        }
      `}</style>
      <ResponsiveMenu
        menuOpenButton={<FontAwesomeIcon icon={faBars} color='white' size='3x' />}
        menuCloseButton={<FontAwesomeIcon icon={faBars} color='white' size='3x' />}
        changeMenuOn='600px'
        menu={
        <>
          <Link href='/'>
            <a style={{ flexGrow: 2, padding: '2px', alignSelf: 'left' }}>
              <img src='static/images/logoHorizontalWhite.png' height='50px' />
            </a>
          </Link>
          <Link href='/'>
            <div><a style={linkStyle}>Inicio</a> </div>
          </Link>
          <Link href='/portafolio'>
            <div><a style={linkStyle}>Portafolio</a> </div>
          </Link>
          <Link href='/modeloDeNegocio'>
            <div><a style={linkStyle}>Modelo de Negocio</a> </div>
          </Link>
          <Link href='/empresas'>
            <div><a style={linkStyle}>Empresas</a> </div>
          </Link>
          <Link href='/fondeadores'>
            <div><a style={linkStyle}>Fondeadores</a> </div>
          </Link>
          <div><a href='mailto:info@b-connected.co' style={linkStyle}>Contáctenos</a> </div>
        </>
        }
      />
    </>
  )
}
