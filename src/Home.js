import react, { useState } from 'react';

export default function Home() {

    // let name = 'mario'
    const [ name, setName ] = useState('mario')

    const handleClick = (e) => {
        name = 'luigi'
        console.log('Hello ninjas', e, name)
    }

    const handleClickAgain = (name, e) => {
        console.log('hello' + name, e.target)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p> { name }</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Ammon', e)}>Click me again</button>
        </div>
    )
}
