import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { FacebookProvider, CustomChat } from 'react-facebook'

export default function Layout (props) {
  return (
    <>
      <Head>
        <title>B - Connected </title>
        <meta charSet='utf-8' />
        <link rel='icon' type='image/x-icon' href='static/favicon/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
        div {
          font-family: 'Monserrat', sans-serif;
        }
      `}</style>
      <style jsx>{`
        div {
          line-height: 0;
        }
      `}</style>
      <FacebookProvider appId='634273627086292'>
        <CustomChat pageId='410423266231075' minimized={false} />
      </FacebookProvider>

      <Header />
      {props.children}
      <Footer {...props} />
    </>
  )
}
