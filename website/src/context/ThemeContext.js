import React from 'react'
import { LightTheme, DarkTheme } from "baseui";

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
    return React.useContext(ThemeContext)
}

export function useThemeUpdate() {
    return React.useContext(ThemeUpdateContext)
}

export default function ThemeProvider({children}) {

    const [theme, setTheme] = React.useState(LightTheme)
 
    function changeTheme() {
        setTheme(prevTheme => {
            if(prevTheme === LightTheme) {
                document.documentElement.style.setProperty("background", DarkTheme.colors.background);
                return DarkTheme
            } else {
                document.documentElement.style.setProperty("background", LightTheme.colors.background);
                return LightTheme    
            }
        }) 
    }

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeUpdateContext.Provider value={changeTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
} 
