import { Navigate, useNavigate, useParams } from "react-router-dom"
import useFetch from "./useFetch";

export default function BlogDetails() {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate()

    const handleClick = (id) => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            console.log(`blog with the blog id ${id} was deleted`)
            navigate('/')
        })
    } 

    return (
        <div className="blog-details">
            <h2>Blog details - { id } </h2>
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            {blog && (
                <artcile>
                    <h2>{ blog.title }</h2>
                    <p>Written by: { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button
                        onClick={() => {handleClick(blog.id)}}
                    >Delete Blog</button>
                </artcile>
            )}
        </div>
    )
}