import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  paddingTop: '1em',
  fontWeight: 'bold'
}

export default function NavLinks () {
  return (
    <>
      <style jsx>{`
        div {
          background: black;
          display: flex;
          justify-content: flex-end;
        }
        a {
          text-decoration: none;
          font-family: 'Arial';
          color: white;
        }
      `}</style>
      <div>
        <Link href='/'>
          <a style={{ flexGrow: 2, padding: '2px' }}>
            <img src='static/images/logoHorizontalWhite.png' height='50px' />
          </a>
        </Link>
        <Link href='/'>
          <a style={linkStyle}>Inicio</a>
        </Link>
        <Link href='/portafolio'>
          <a style={linkStyle}>Portafolio</a>
        </Link>
        <Link href='/modeloDeNegocio'>
          <a style={linkStyle}>Modelo de Negocio</a>
        </Link>
        <Link href='/empresas'>
          <a style={linkStyle}>Empresas</a>
        </Link>
        <Link href='/fondeadores'>
          <a style={linkStyle}>Fondeadores</a>
        </Link>
      </div>
    </>
  )
}
