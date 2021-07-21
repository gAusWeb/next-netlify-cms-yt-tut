const BlogList = ({ blogs, title, handleDelete }) => {
    
    return (
        <>
            <div className="blog-list">
                <hr />
                <h1>{title}</h1>
                <hr />
                <div className="row">
                    {blogs.map((blog, i) => (
                        <div className="col" key={blog.id}>
                            <div className="blog-preview">
                                <h2>{blog.title}</h2>
                                <p>Written by: {blog.author}</p>
                                <button className="btn btn-danger" onClick={() => handleDelete(blog.id)}>
                                    Delete Blog
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <br />
            </div>
        </>
    );
};

export default BlogList;
