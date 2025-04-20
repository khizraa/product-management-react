import Dashboard from "./scripts/Dashboard";
import Homepage from "./scripts/Homepage";
import NavBar from "./scripts/NavBar";
import Products from "./scripts/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
 
  return(
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/product-management-react" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />}/>
      </Routes>
    </Router>
    
   
    </>
  )
}

export default App;