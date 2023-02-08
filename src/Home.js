import react, { useState } from 'react';

export default function Home() {

    // let name = 'mario'
    const [ name, setName ] = useState('mario')
    const [ age, setAge ] = useState(25)

    const handleClick = (e) => {
        setName('luigi')
        setAge(30)
        console.log('Hello ninjas', e, name)
    }

    const handleClickAgain = (name, e) => {
        console.log('hello' + name, e.target)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p> { name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Ammon', e)}>Click me again</button>
        </div>
    )
}
