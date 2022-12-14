import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="bg-neutral-800 flex justify-between px-20 py-4">
            <Link to="/home" className="text-white font-bold">
                <h1>Tasks App</h1>
            </Link>

            <ul className="flex gap-x-1">
                <li>
                    <Link to='/home' className="bg-slate-200 px-2 py-1">Home</Link>
                    <Link to='/home/new' className="bg-teal-200 px-2 py-1">Create Tasks</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;