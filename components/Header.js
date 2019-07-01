import Link from 'next/link'
import NavLinks from './navLinks'

const linkStyle = {
  marginRight: 15
}

export default function Header () {
  return (
    <div>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }
        ul {
          padding: 0;
        }
        li {
          list-style: none;
          margin: 5px 0;
        }
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          opacity: 0.6;
        }
        div {
          background: black; 
        }
      `}</style>
      <Link href='/'>
        <a style={linkStyle}>
          <img src='static/images/logoWhite.png' height='50px' />
        </a>
      </Link>
      <NavLinks />
    </div>
  )
}
