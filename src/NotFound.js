import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <>
            <h1>Sorry</h1>
            <div>That page cannot be found</div>
            <Link to="/">back to homepage</Link>
        </>
    )
}