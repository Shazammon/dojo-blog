import react from 'react';

export default function Home() {

    const handleClick = (e) => {
        console.log('Hello ninjas', e)
    }

    const handleClickAgain = (name) => {
        console.log('hello' + name)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Ammon', e)}>Click me again</button>
        </div>
    )
}
