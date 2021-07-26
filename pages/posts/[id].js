import Link from 'next/link'
import { useRouter } from 'next/router'

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
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
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { user: data },
    };
};

const Details = ({ user }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.push(`/posts/`)
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
                            <h3>{user.name}</h3>
                            <h6>{user.email} | {user.website} | {user.address.city}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;
