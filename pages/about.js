import { attributes, react as AboutContent } from '../content/about.md';

const About = () => {

    let { title, date } = attributes;

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col">
                        
                        <h1>{title}</h1>
                        <span>{date}</span>

                        <hr></hr>
                        
                        <form name="about" method="post" data-netlify="true">
                            <input type="hidden" name="form-name" value="about" />
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="first_name" className="form-control" id="firstName" placeholder="Enter your first name..." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="last_name"  className="form-control" id="lastName" placeholder="Enter your last name..." />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="message">Check me out</label>
                                
                                <textarea className="form-control" name="message" id="message" placeholder="Send us a message..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>


                        <AboutContent />
                    </div> 
                </div> 
            </div> 
        </>
    )
}

export default About