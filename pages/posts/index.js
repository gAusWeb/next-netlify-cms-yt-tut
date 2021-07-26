import Link from 'next/link';
import { useRouter } from 'next/router';

// Only runs at build time, when app is build/rendered, do not put code here intended for dome elements
export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { users: data },
    };
};

const GeesUsers = ({ users }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
        router.push(`/`)
    }
    return (
        <div className="users">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>geeAusWeb Usernames</h1>
                        <p><Link href="/"><a onClick={handleClick}><strong>{`< Home`}</strong></a></Link></p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                            {users.map((el) => (
                                <Link href={`/posts/${el.id}`}  key={el.id} className="users__container">
                                    <a>
                                        <h5>{el.name}</h5>
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
