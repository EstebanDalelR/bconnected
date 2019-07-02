import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Footer (props) {
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
          <img src={`static/images/${props.image ? props.image : 'somos.png'}`} width='100%' />
        </a>
      </Link>
    </div>
  )
}
