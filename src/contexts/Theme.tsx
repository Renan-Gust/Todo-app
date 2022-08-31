import { createContext, useContext, useState,useEffect } from "react"

export const ThemeContext = createContext({})

export const ThemeContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [theme, setTheme] = useState<"dark" | "light">("dark")

    useEffect(() => {
        const themeStorage = localStorage.getItem("theme")

        if(themeStorage){
            setTheme(JSON.parse(themeStorage))
        }
    }, [])

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

type ThemeType = {
    theme?: "dark" | "light";
    setTheme?: any;
}

export const useTheme = () => useContext<ThemeType>(ThemeContext)