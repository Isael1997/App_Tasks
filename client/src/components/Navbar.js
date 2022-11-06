import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <h1>Tasks App</h1>

            <ul>
                <li>
                <Link to='/'>Home</Link>
                <Link to='/new'>Create Tasks</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;