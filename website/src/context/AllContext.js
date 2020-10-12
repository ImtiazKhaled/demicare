import React from 'react'
import ThemeProvider from './ThemeContext'

export default function AllContextProvider({children}) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
} 
