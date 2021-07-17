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


        document.getElementById('myForm').addEventListener('submit', async event => {
            event.preventDefault()
            // https://gees-first-next-netlify-site.netlify.app/search/searchIndex.json
            // https://yoursite.netlify.com/.netlify/functions/mySearchFunction?search=foo
            // const result = await fetch(`/search/searchIndex.json?search=${event.target.searchText.value}&limit=25`)
            // .netlify.com/.netlify/functions/mySearchFunction?search=
            // https://gees-first-next-netlify-site.netlify.com/.netlify/functions/mySearchFunction?search=
            
            const result = await fetch(`/.netlify/functions/searchIndex?search=${event.target.searchText.value}&limit=25`).then(x => x.json())
            document.getElementById('result').innerText = JSON.stringify(result, null, 2)
          })
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
                        <form id="myForm">
                            <div className="search-wrap">
                                <input className="search-input" name="searchText" placeholder="Search for tech articles (eg. Animal crossing)" />
                            </div>
                            <div><button className="button">submit</button></div>
                        </form>

                        <br />

                        <div id="result"></div>

                        <br />

                        <h1>{title}</h1>
                        <span>{date}</span>
                        <hr />
                        {/* <DynamicComponentWithNoSSR /> */}
                        <HomeContent />
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
