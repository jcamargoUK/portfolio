import '@/styles/globals.css'
import Layout from '../../components/Layout/Layout/Layout'
import { useEffect } from 'react'



export default function App({ Component, pageProps }) {
  useEffect(() => {
    const Pagescript = document.createElement('script')
    Pagescript.setAttribute("id", Pagescript)
    Pagescript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js")
    document.getElementsByTagName('head')[0].appendChild(Pagescript)
    return() => {
      if(Pagescript){
        Pagescript.remove()
      }
      }
  }, [])
  return(
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}
