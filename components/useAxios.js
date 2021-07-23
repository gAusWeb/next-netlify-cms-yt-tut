// Custom hook - Get data via Axios 
import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = (url) => { // custom hooks must start with word 'use'
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(true);
    
    useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(() => {
            axios.get(url, {signal: abortCont.signal})
                .then(resp => {
                    setData(resp.data)
                    setIsLoading(false)
                    setError(null)
                })
                .catch(error => {
                    if (error.name === 'AbortError') {
                        console.log('fetch Aborted');
                    } else {
                        setIsLoading(false)
                        if (error.response) { // Request made and server responded
                            // setError(err.response.data);
                            setError(error.response.status);
                            // setError(err.response.headers);
                        } else if (error.request) { // The request was made but no response was received
                            setError(error.request);
                        } else { // Something happened in setting up the request that triggered an Error
                            setError('Error', error.message);
                        }
                    }
                }
            )

            // const apiBlogs = async () => {
            //     const results = await axios.get(`http://localhost:8000/blogs`);
            //     setBlogs(results.data)
            //     setIsLoading(false)
            //     .catch((error) => {
            //         if (error.response) {
            //             // Request made and server responded
            //             console.log(error.response.data);
            //             console.log(error.response.status);
            //             console.log(error.response.headers);
            //         } else if (error.request) {
            //             // The request was made but no response was received
            //             console.log(error.request);
            //         } else {
            //             // Something happened in setting up the request that triggered an Error
            //             console.log('Error', error.message);
            //         }
            //     })
            // }
            // apiBlogs()

            // fetch(`http://localhost:8000/blogs`)
            //     .then(res => {
            //         return res.json();
            //     })
            //     .then(data => {
            //         setBlogs(data)
            //         setIsLoading(false)
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     })
        }, 1000);
        
        return () => abortCont.abort();
    }, [url])

    return {data, isLoading, error}
}

export default useAxios;