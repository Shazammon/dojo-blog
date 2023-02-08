import { useState } from "react";


export default function Create() {
    const [ title, setTitle] = useState('');
    const [ body, setBody] = useState('');
    const [ author, setAuthor] = useState('mario');


    return (
        <div className="create">
            <h2>Add a New Blog</h2>

            <form>
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
                <button>Add Blog</button>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            <p>Author:{author}</p>
            </form>
        </div>
    );
}