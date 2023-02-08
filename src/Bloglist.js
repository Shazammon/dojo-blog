import react from 'react'

export default function Bloglist({blogs}) {
    return (
        <>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author} </p>
                </div>
            ))}
        </>
    )
}