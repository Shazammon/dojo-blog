import react, { useState } from 'react';

export default function Home() {

    const [ blogs, setBlogs ] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

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
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author} </p>
                </div>
            ))}
            {/* <h2>Home Page</h2>
            <p> { name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Ammon', e)}>Click me again</button> */}
        </div>
    )
}
