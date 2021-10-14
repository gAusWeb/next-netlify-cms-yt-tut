import Link from 'next/link'
import { useRouter } from 'next/router'
import VideoPlayer from '../../components/VideoPlayer';
// import VideosDataLocal from '../../data/VideosDataLocal';
import { VideosDataLocal } from '../../data/VideosDataLocal';

export const getStaticPaths = async () => {
    // const res = await fetch('http://localhost:3004/videos');
    // const data = await res.json();
    
    const data = VideosDataLocal;
    console.log('vid-local-videos[id]', VideosDataLocal);

    const paths = data.map(videos => {
        return {
            params: { id: videos.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

// Only runs at build time, when app is build/rendered, do not put code here intended for dome elements
// this will loop through every matching param (above), to generate the data for each page
// context is a built in object
export const getStaticProps = async (context) => {
    const id = context.params.id - 1;
    // const res = await fetch(`http://localhost:3004/videos/${id}`);
    // const data = await res.json();
    
    const initData = VideosDataLocal;
    const data = initData[id];

    return {
        props: { videos: data },
    };
};

const Details = ({ videos }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.push(`/videos/`)
    }



    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <br />
                        <br />
                        <p>Go <Link href="/"><a onClick={handleClick}><strong>back</strong></a></Link> previous page</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="users">
                        <VideoPlayer videos={videos} />
                            {/* <h3>{videos.url}</h3>
                            <h6>{videos.title} | {videos.videoTitle}</h6> */}
                            {/* {videos.map((video) => {
                                console.log('video.videoUrl', video.videoUrl);
                                return <h1></h1>
                            })} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
