import Link from "next/link";
import { useRouter } from "next/router";
import VideoPlayer from "../../components/VideoPlayer";
import { getPostBySlug, getAllPosts } from "../../lib/api";
// import VideosDataLocal from '../../data/VideosDataLocal';
// import { VideosDataLocal } from '../../public/cache/posts.json';
// import { attributes, react as Video1 } from "../../content/videos/2021-10-14-video-test-1.md";
// import dataImport from '../../public/cache/posts.json'

export const getStaticPaths = async () => {
    // const loadData = () => jsonData;
    // const url = './public/cache/posts.json'
    // const res = await fetch(`http://localhost:3004/videos`);
    // const data = await res.json();

    const posts = getAllPosts(["slug"]);

    // return {
    //     paths: posts.map((post) => {
    //         console.log('yooo', post.slug);
    //       return {
    //         params: {
    //           id: post.slug.toString()
    //         },
    //       }
    //     }),
    //     fallback: false,
    //   }

    const paths = posts.map((video) => {
        return {
            params: { slug: video.slug.toString() },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

// Only runs at build time, when app is build/rendered, do not put code here intended for dome elements
// this will loop through every matching param (above), to generate the data for each page
// context is a built in object
export const getStaticProps = async ({ params }) => {
    const slug = params.slug;
    // const res = await fetch(`http://localhost:3004/videos/${id}`);
    // const data = await res.json();

    const posts = getPostBySlug(slug, ["title", "slug"]);

    return {
        props: { videos: posts },
        // props: {
        //     posts,
        //     title: 'Blog',
        //     description: 'Posts on software engineering',
        //   },
    };
};

const Details = ({ videos }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(`/videos/`);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <br />
                        <br />
                        <p>
                            Go{" "}
                            <Link href="/">
                                <a onClick={handleClick}>
                                    <strong>back</strong>
                                </a>
                            </Link>{" "}
                            previous page
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="users">
                            <VideoPlayer videos={videos} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
