import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
    render() { 
        return (
            <Html>
	            <Head>
                    <NextScript />
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" crossorigin="anonymous"></script>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    
                                <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css"
                    />
                    <script
                        type="text/javascript"
                        src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"
                    ></script>
                </Head>
                <body>
                    <Main />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
