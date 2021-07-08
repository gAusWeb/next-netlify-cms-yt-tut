import Head from 'next/head'
import { attributes, react as HomeContent } from '../content/home.md';
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
    () => import('../components/hello'),
    { ssr: false }
  )

const Home = () => {

    let { title, date } = attributes;

    return (
        <>
            <Head>
                <title>NextJs/Netlify Integration Demo</title>
                <meta name="keywords" content="nextjs, netlify, netlifycms" />
            </Head>

            <div className="container">
                <div className="row">
                    <div className="col">
                        
                        <h1>{title}</h1>
                        <span>{date}</span>
                        <hr />
                        <DynamicComponentWithNoSSR />
                        <HomeContent />
                        <div id="search"></div>
                    </div> 
                </div> 
            </div> 
            
        </>
    )
}

export default Home