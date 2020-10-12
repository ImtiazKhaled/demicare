import React from 'react'
import ThemeProvider from './ThemeContext'
import ResourceProvider from './ResourcesContext'
import DementiaProvider from './DementiaContext'

export default function AllContextProvider({children}) {
    return (
        <ThemeProvider>
            <ResourceProvider>
                <DementiaProvider>
                    {children}
                </DementiaProvider>
            </ResourceProvider>
        </ThemeProvider>
    )
} 
