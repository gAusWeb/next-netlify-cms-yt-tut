import Layout from "../components/Layout";
import "../fed/css/vendor/bootstrap-v4-4-1.css";
import "../fed/css/vendor/quick-image-reset.css";
import css from '../fed/css/scss/main.scss';
// import test from '../fed/scripts/sticky-header'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}