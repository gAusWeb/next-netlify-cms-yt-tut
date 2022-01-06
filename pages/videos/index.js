import Link from "next/link";
import { useRouter } from "next/router";
// import { VideosDataLocal } from '../../data/VideosDataLocal';
// import { attributes, react as Video1 } from "../../content/videos/2021-10-14-video-test-1.md";
import { getPostBySlug, getAllPosts } from "../../lib/api";
// Only runs at build time, when app is build/rendered, do not put code here intended for dom elements

export const getStaticProps = async () => {
    // const jsonData = 'http://localhost:3004/videos';
    // const res = await fetch(jsonData)
    // const data = await res.json();

    // const data = VideosDataLocal;
    const posts = getAllPosts([
        "id",
        "title",
        "slug",
        "videoTitle",
        "videoDesc",
        "videoUrl",
        "videoImage",
    ]);

    return {
        props: { videos: posts },
    };
};

const GeesUsers = ({ videos }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(`/`);
    };

    console.log("realSlug =>", videos);

    return (
        <div className="users">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>geeAusWeb Usernames</h1>
                        <p>
                            <Link href="/">
                                <a onClick={handleClick}>
                                    <strong>{`< Home`}</strong>
                                </a>
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {videos.map((video) => (
                            <Link
                                href={`/videos/${video.slug}`}
                                key={video.id}
                                className="users__container"
                            >
                                <a>
                                    <h5>{video.title}</h5>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeesUsers;
