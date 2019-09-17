export default function FooterIcon () {
  return (
    <div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        a, p{
          color:white;
        }
      `}</style>
      <div>
        <img src='static/images/logoWhite.png' height='80px' width="80px" />
      </div>
      <div>
        <a href="https://goo.gl/maps/kzH38U2pSxSNGGuXA">
          <p>Cra 47a #96 - 41 Of 202, Edifico Business Point, Bogotá</p>
        </a>
        <p>Teléfono: 7456335</p>
      </div>
    </div>
  )
}
