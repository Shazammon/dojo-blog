import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom'


export default function Create() {
    const [ title, setTitle] = useState('');
    const [ body, setBody] = useState('');
    const [ author, setAuthor] = useState('mario');
    const [ isPending, setIsPending ] = useState(false);
    const navigate = useNavigate()
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const newBlog = { title, body, author }

        setIsPending(true)

        // console.log(newBlog)
        // fetch method
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newBlog)
        }).then(() => {
            console.log('new blog posted')
            setIsPending(false)
            setTitle('')
            setBody('')
            setAuthor('mario')
            navigate(`/`)
        }
        )

    }


    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form
                onSubmit={handleSubmit}
            >
                <label>Blog Title:</label>
                <input 
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Content:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => {setBody(e.target.value)}}
                ></textarea>
                <select
                    value={author}
                    onChange={(e) => {setAuthor(e.target.value)}}
                >
                    <option value='mario'>mario</option>
                    <option value='yoshi'>yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            <p>Author:{author}</p>
            </form>
        </div>
    );
}