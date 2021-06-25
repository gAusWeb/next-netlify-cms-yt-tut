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
                        <div>
                            <img src="https://picsum.photos/2500/600" className="img-fluid" alt="Responsive image"/>
                        </div>
                        
                        <div>
                            <img src="https://picsum.photos/2500/600" className="img-fluid" alt="Responsive image"/>
                        </div>

                    </div> 
                </div> 
            </div> 
        </>
    )
}

export default About