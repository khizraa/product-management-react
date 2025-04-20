import { useNavigate } from "react-router-dom";
function Homepage() {
    const navigate = useNavigate();
    return(
        <div className="homepage-container">
      <h1>Welcome to Khizzra's Product Store</h1>
      <p>Manage, update, and track your products easily!</p>
      <button onClick={()=>navigate("/products")}>View Products</button>
    </div>
    )
    
}
export default Homepage;