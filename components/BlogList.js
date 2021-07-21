const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <>
            <div className="blog-list">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{title}</h1>
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {blogs.map((blog, i) => (
                            <div className="col" key={blog.id}>
                                <div className="blog-preview">
                                    <h2>{blog.title}</h2>
                                    <p>Written by: {blog.author}</p>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(blog.id)}
                                    >
                                        Delete Blog
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
            </div>
        </>
    );
};

export default BlogList;
