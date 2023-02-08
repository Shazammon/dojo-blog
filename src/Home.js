import { useState, useEffect } from 'react';
import Bloglist from './Bloglist'

export default function Home() {

    const [ blogs, setBlogs ] = useState()

    // const [ name, setName ] = useState('mario')

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource')
                    }
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                    setBlogs(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false)
                    console.log(err.message)
                    setError(err.message)
                })

        }, 500)
        // console.log('use effect ran')
        // console.log(blogs)
        // console.log(name)

    }, []);

    // let name = 'mario'
    // const [ name, setName ] = useState('mario')
    // const [ age, setAge ] = useState(25)

    // const handleClick = (e) => {
    //     setName('luigi')
    //     setAge(30)
    //     console.log('Hello ninjas', e, name)
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello' + name, e.target)
    // }

    return (
        <div className="home">
            {isPending && <div>Loading...</div> }
            {error && <div>{error}</div>}
            {blogs && <Bloglist blogs={blogs} title='All Blogs' />}
            {/* <button onClick={() => setName('luigi')}>Change name</button>
            <p>{name}</p> */}
            {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/> */}
            {/* <h2>Home Page</h2>
            <p> { name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Ammon', e)}>Click me again</button> */}
        </div>
    )
}
