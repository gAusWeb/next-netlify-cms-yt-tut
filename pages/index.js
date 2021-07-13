import Head from "next/head";
import { useEffect } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import dynamic from "next/dynamic";
import $ from "jquery";
// import searchIndex from './searchIndex.json'

// const DynamicComponentWithNoSSR = dynamic(() => import("../components/hello"), {
//     ssr: false,
// });

const Home = () => {
    let { title, date } = attributes;

    useEffect(() => {
        const searchDiv = $("#search");
        searchDiv.css("border", "1px solid red");
    }, []);

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
                        {/* <DynamicComponentWithNoSSR /> */}
                        <HomeContent />
                        <div id="search"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
