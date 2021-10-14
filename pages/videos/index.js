import Link from 'next/link';
import { useRouter } from 'next/router';
import { VideosDataLocal } from '../../data/VideosDataLocal'

// Only runs at build time, when app is build/rendered, do not put code here intended for dom elements

export const getStaticProps = async () => {
    const jsonData = 'http://localhost:3004/videos';
    const res = await fetch(jsonData)
    const data = await res.json();

    return {
        props: { jsonData: data, localData: VideosDataLocal},
    };
};


const GeesUsers = (props) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.push(`/`)
    }

    let videos = [];

    // check for json-server, if not use local data
    props.jsonData.length > 0 ? videos = props.jsonData : videos = props.localData


    return (
        <div className="users">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>geeAusWeb Usernames</h1>
                        {/* {users} */}
                        <p><Link href="/"><a onClick={handleClick}><strong>{`< Home`}</strong></a></Link></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                            {videos.map((video) => (
                                <Link href={`/videos/${video.id}`}  key={video.id} className="users__container">
                                    <a>
                                        <h5>{video.title}</h5>
                                    </a>
                                </Link>
                            ))}
                    </div>
                </div>
                {/* <div className="col">
                    {users.map((el) => (
                        <p key={el.id}>{el.company.name}</p>
                    ))}
                </div>
                <div className="col">
                    {users.map((el) => (
                        <p key={el.id}><a href={`https://${el.website}`}>{el.website}</a></p>
                    ))}
                </div> */}
            </div>
        </div>
       
    );
};

export default GeesUsers;
