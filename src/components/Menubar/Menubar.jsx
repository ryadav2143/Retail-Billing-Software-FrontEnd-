import './Menubar.css'
import {Link} from "react-router-dom";

const Menubar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
                <a className="navbar-brand" href="#">
                    <img src="http://4.bp.blogspot.com/_j_JteD94Yz0/TOSQRLk5LlI/AAAAAAAAAdc/JOnT_-dujcs/s1600/itservices.jpg" alt="Logo" height="40"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse p-2" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/explore">Explore</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manageItems">Manage Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manageCategories">Manage Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/manageUsers">Manage Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}
export default Menubar;