import AddProducts from "./AddProducts";
import ReadProducts from "./ReadProducts";
import { useTheme } from "./ThemeProvider";

function Dashboard() {
    const {theme,toggleTheme} = useTheme();
    return(<>
     <div className={`app-container ${theme === "light" ? "light-theme" : "dark-theme"}`}> 

<button onClick={toggleTheme}>switch to {theme==="dark"?"light":"dark"} theme</button>
<AddProducts />
<ReadProducts />
</div>
    
    </>)
}

export default Dashboard;