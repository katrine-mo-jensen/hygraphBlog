import { Link } from "react-router-dom"

export const Navigation = () => {

    return (
        <nav>
            <Link to="/">HyGraph Blog</Link>
            <Link to="/blogposts">Blog Posts</Link>
            
        </nav>
    )
}