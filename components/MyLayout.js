import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout (props) {
  return (
    <>
      <Head>
        <title>B - Connected </title>
        <meta charSet='utf-8' />
        <link rel='icon' type='image/x-icon' href='static/favicon/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
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
