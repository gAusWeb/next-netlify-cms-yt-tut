// import { Component } from 'react'
// import { attributes, react as HomeContent } from '../content/home.md';

const About = () => {

    // let { title, date } = attributes;

    return (
        <>
        <div className="container">
                <div className="row">
                    <div className="col">
                        <p><a href="./" title="Click to to go to home page">Home</a></p>
                        <p><a href="./about" title="Click to to go to home page">About</a></p>
                        <p><a href="./contact" title="Click to to go to home page">Contact</a></p>
                        <hr></hr>
                        <h1>About</h1>
                        <hr></hr>


                        <form name="contact" method="POST" data-netlify="true">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                    </div> 
                </div> 
            </div> 
        </>
    )
}

export default About