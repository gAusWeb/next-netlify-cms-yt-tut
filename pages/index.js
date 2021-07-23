import Head from "next/head";
import { useEffect, useState } from "react";
import { attributes, react as HomeContent } from "../content/home.md";
import BlogList from "../components/BlogList";
import useAxios from "../components/useAxios";
import axios from "axios";
import styles from '../fed/css/scss/page-specific/home.module.scss'

// import dynamic from "next/dynamic";
// import $ from "jquery";
// import { isEqual } from "lodash";
// import qs from "qs";
// import algoliasearch from "algoliasearch/lite";
// import { findResultsState } from "react-instantsearch-dom/server";

// import searchIndex from '../public/search/searchIndex.json'

// const DynamicComponentWithNoSSR = dynamic(() => import("../components/hello"), {
//     ssr: false,
// });

// const searchClient = algoliasearch(
//     "latency",
//     "4adcaf4f084b53ef5d323f0b609d71c9"
// );

// const updateAfter = 700;

// const createURL = (state) => `?${qs.stringify(state)}`;

// const searchStateToURL = (searchState) =>
//     searchState
//         ? `${window.location.pathname}?${qs.stringify(searchState)}`
//         : "";

// const DEFAULT_PROPS = {
//     searchClient,
//     indexName: "instant_search",
// };


// run json-server without DL npm package to project
// npx json-server --watch data/db.json --port 8000




const Home = (props) => {
    let { title, date } = attributes;
    const [name, setName] = useState("mario");
    const {data: blogs, isLoading, error} = useAxios('http://localhost:8000/blogs')
    
    


    // const [searchState, setSearchState] = useState(props.searchState);
    
    // const [lastRouter, setLastRouter] = useState(props.searchState)
    // console.log(props);

    // const fetchData = async () => {
    //     const results = await axios.get(`/.netlify/functions/mySearchFunction`);
    //     console.log(results);
    // }

    /*
    useEffect(() => {
        // const searchDiv = $("#search");
        // searchDiv.css("border", "1px solid red");

        

        document
            .getElementById("myForm")
            .addEventListener("submit", async (event) => {
                event.preventDefault();
                // https://gees-first-next-netlify-site.netlify.app/search/searchIndex.json
                // https://yoursite.netlify.com/.netlify/functions/mySearchFunction?search=foo
                // const result = await fetch(`/search/searchIndex.json?search=${event.target.searchText.value}&limit=25`)
                // .netlify.com/.netlify/functions/mySearchFunction?search=
                // https://gees-first-next-netlify-site.netlify.com/.netlify/functions/mySearchFunction?search=

                // do get a response from this:
                // https://gees-first-next-netlify-site.netlify.app/.netlify/functions/mySearchFunction?

                // console.log(`test => ${event.target.searchText.value}`);

                const result = await fetch(
                    `/.netlify/functions/mySearchFunction?search=${event.target.searchText.value}&limit=25`
                ).then((x) => x.json());
                document.getElementById("result").innerText = JSON.stringify(
                    result,
                    null,
                    2
                );

                // let url = 'https://gees-first-next-netlify-site.netlify.com/.netlify/functions/mySearchFunction'

                // const results = await axios.get(`../public/search/searchIndex.json`);
                // document.getElementById('result').innerText = JSON.stringify(results, null, 2)

                // console.log('searchIndex', searchIndex)
            });

           

    }, [name]);
    */

    const handleClick = () => {
        setName("guiseppe");
    };

    

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // };
    
    const [ninjaData, setNinjaData] = useState(null)
    const [ninjaDataLoaded, setNinjaDataLoaded] = useState(false)
    

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/users')
            .then(resp => {
                setNinjaData(resp.data);
                setNinjaDataLoaded(true)
            })
            
    },[])

    return (
        <>
            <Head>
                <title>NextJs/Netlify Integration Demo</title>
                <meta name="keywords" content="nextjs, netlify, netlifycms" />
            </Head>
            
            <section
                style={{
                    backgroundImage:
                        "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/freedom.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "800px",
                }}
            ></section>

            {/* {console.log(ninjaData)} */}
            {/* {ninjaData.map(el => <p key={el.id}>{el.name}</p>)} */} 

            {ninjaDataLoaded &&
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ul className={styles.test_class}>
                                {ninjaData.map(el => <li key={el.id}>{el.name}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            }

            {/* <section
                style={{
                    backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/travel.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: '400px',
                }}
            ></section>
            <section
                style={{
                    backgroundImage: "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/holidays.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: '400px',
                }}
            ></section> */}

            {/* <div>
                <h1>All Ninjs</h1>
                {ninjaData.map(ninja => (
                    <Link key={ninja.id}>
                        <a>
                            <h3>{ninja.name}</h3>
                        </a>
                    </Link>
                ))}
            </div> */}

            

            {error && 
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div>{error}</div>
                        </div>
                    </div>
                </div>
            }
             
            {isLoading && 
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div>loading...</div>
                        </div>
                    </div>
                </div>
            }

            {blogs && <BlogList
                blogs={blogs}
                title="All Blogs"
            />}

            {blogs && <BlogList
                blogs={blogs.filter((blog) => blog.author === "mario")}
                title="Mario's Blogs"
            />}
            
            <div className="container">
                <div className="row">
                    <div className="col">
                        <br />

                        <br />
                        <br />

                        <button className="btn btn-danger" onClick={handleClick}>Click me</button>

                        <br />

                        <p>{name}</p>

                        <br />

                        <form id="myForm">
                            <div className="search-wrap">
                                <input
                                    className="form-control search-input"
                                    name="searchText"
                                    placeholder="Search for tech articles (eg. Animal crossing)"
                                />
                            </div>
                            <div>
                                <button className="btn btn-danger">submit</button>
                            </div>
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
