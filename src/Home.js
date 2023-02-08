import react, { useState } from 'react';
import Bloglist from './Bloglist'

export default function Home() {

    const [ blogs, setBlogs ] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const handleDelete = (id) => {
        setBlogs([...prevBlogs])
    }

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
            <Bloglist blogs={blogs} title='All Blogs'/>
            <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/>
            {/* <h2>Home Page</h2>
            <p> { name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Ammon', e)}>Click me again</button> */}
        </div>
    )
}
