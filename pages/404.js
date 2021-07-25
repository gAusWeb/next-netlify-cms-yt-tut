import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

const PageNotFound = () => {
    const countDown = 10;
    const compCountDown = countDown * 1000;
    const [counter, setCounter] = useState(countDown);
    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            router.push('/'); // Redirect Page in Next
        }, compCountDown)
        
        // Countdown to zero using state
        const timer = setInterval(() => {
            if (counter === 0) { return; }
            setCounter(prevCount => prevCount === 0 ? prevCount : prevCount - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    },[]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="vertical-centered">
                        <div className="height--lg mt-100">
                            <h1>Oooops...</h1>
                            <h5>Sorry, this page is not found...</h5>
                            <br />
                            <h6>Redirecting you to our Homepage in, <strong>{counter}</strong> </h6>
                            <p>Click here to navigate back to the <Link href="/"><a>Homepage</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;
