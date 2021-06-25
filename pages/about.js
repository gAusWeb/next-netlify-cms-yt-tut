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

                        
                        <form name="about" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="about" />
                            <div className="form-group">
                                <label htmlFor="firstName">
                                    First Name
                                    <input type="text" className="form-control" id="firstName" placeholder="Enter your first name..." />
                                </label>
                                
                            </div>
                            <div className="form-group">
                                <label>
                                    Last Name
                                    <input type="text" className="form-control" id="lastName" placeholder="Enter your last name..." />
                                </label>
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="message">Check me out</label>
                                
                                <textarea className="form-control" id="message" placeholder="Send us a message..."></textarea>
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