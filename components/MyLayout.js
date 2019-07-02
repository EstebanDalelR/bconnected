import Header from './Header'
import Footer from './Footer'

export default function Layout (props) {
  return (
    <>
      <style jsx>{`
        div {
          line-height: 0;
        }
      `}</style>
      <Header />
      {props.children}
      <Footer {...props} />
    </>
  )
}
