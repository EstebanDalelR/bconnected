import SocialIcons from './socialIcons'
import FooterIcon from './footerIcon'

export default function Footer (props) {
  return (
    <div>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }
        a {
          text-decoration: none;
          color: white;
        }
        a:hover {
          opacity: 0.9;
        }
        div {
          background-image: url(static/images/footer/${props.image ? props.image : 'footerIndex.png'});
          background-color: darkgrey;
          background-size: cover;
          background-repeat: no-repeat;
        }
      `}</style>
      <FooterIcon />
      <SocialIcons />
    </div>
  )
}
