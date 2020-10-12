import React from 'react'
import ThemeProvider from './ThemeContext'
import ResourceProvider from './ResourcesContext'

export default function AllContextProvider({children}) {
    return (
        <ThemeProvider>
            <ResourceProvider>
                {children}
            </ResourceProvider>
        </ThemeProvider>
    )
} 
