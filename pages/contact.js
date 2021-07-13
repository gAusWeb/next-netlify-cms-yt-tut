import { attributes, react as ContactContent } from '../content/contact.md';
// import Slider from '../components/Slider';

const About = () => {

    let { title, date } = attributes;

    return (
        <>
                        {/* <Slider /> */}

            <div className="container">
                <div className="row">
                    <div className="col">

                        <h1>{title}</h1>
                        <span>{date}</span>

                        <hr></hr>

                        
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
                                <option value="dev">Dev</option>
                                <option value="pencil-pusher">Pencil-pusher</option>
                                </select></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>

                        <ContactContent />

                    </div> 
                </div> 
            </div> 
        </>
    )
}

export default About