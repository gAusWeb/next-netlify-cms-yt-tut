import { attributes, react as HomeContent } from '../content/home.md';
import Navigation from "./partials/Navigation";

const Home = () => {

    let { title, date } = attributes;

    return (
        <>
            <Navigation />

            <div className="container">
                <div className="row">
                    <div className="col">
                        
                        <h1>{title}</h1>
                        <span>{date}</span>

                        <HomeContent />

                    </div> 
                </div> 
            </div> 
            
        </>
    )
}

export default Home