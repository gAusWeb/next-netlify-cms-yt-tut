import Layout from "../components/Layout"
import "../fed/scss/quick-image-reset.css"
import "../fed/scss/bootstrap-v4-4-1.css"
import searchIndex from './searchIndex.json'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}