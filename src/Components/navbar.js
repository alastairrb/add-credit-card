import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function navbar() {
    return <nav className="nav">
        <ul>
           <CustomLink to="/creditcardlist">Credit Card List</CustomLink>
           <CustomLink to="/">Add Credit Card</CustomLink>
           <CustomLink to="/countries">Country List</CustomLink>
        </ul>
    </nav>    
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}