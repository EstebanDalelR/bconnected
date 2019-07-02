export default function SocialIcons () {
  return (
    <div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: space-around;
          padding: 2%
        }
      `}</style>
      <a href='https://www.instagram.com/bconnectedco/'>
        <img height='40px' src='static/icons/instagram.png' style={{ filter: 'invert(1)' }} />
      </a>
      <a href='https://www.facebook.com/B-connectedco-410423266231075/'>
        <img height='40px' src='static/icons/facebook.png' />
      </a>
      <a href='https://twitter.com/b_connectedco'>
        <img height='50px' src='static/icons/twitter.png' />
      </a>
      <a href='mailto:info@b-connected.co'>
        <img height='40px' src='static/icons/mail.png' style={{ filter: 'invert(1)' }} />
      </a>
    </div>
  )
}