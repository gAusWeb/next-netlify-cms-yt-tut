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
                        <h1>Contact</h1>
                        <form name="contact" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <label>Your Name: <input type="text" name="name" /></label>   
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email" /></label>
                            </p>
                            <p>
                                <label>Your Role: <select name="role[]" multiple>
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                                </select></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>

                    </div> 
                </div> 
            </div> 
        </>
    )
}

export default About