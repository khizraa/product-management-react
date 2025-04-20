import { Link } from "react-router-dom";

function NavBar(params) {
    return(<>
   <nav className="navbar">
      <div className="navbar-logo">💄 Khizzra's Store</div>
      <ul className="navbar-links">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/products">Products</Link></li> 
    <li><Link to="/dashboard">Dashboard</Link></li>
    {/* <li><Link to="/about">About</Link></li> */}
    </ul>
    </nav>

    </>)
}

export default NavBar;