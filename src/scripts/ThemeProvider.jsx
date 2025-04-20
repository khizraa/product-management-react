import { useState, createContext, useContext } from "react"

const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light")

    const toggleTheme=()=>{
        setTheme(preTheme => preTheme ==="light"?"dark":"light")
    }


    return(
        <>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}
export const useTheme =()=> useContext(ThemeContext);

export default ThemeProvider;
