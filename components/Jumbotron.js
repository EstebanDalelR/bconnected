export default function Jumbotron (props) {
  return (
    <img src={`static/images/${props.image ? props.image : 'somos.png'}`} width='100%' />
  )
}
