import React from 'react'
import ThemeProvider from './ThemeContext'
import ResourceProvider from './ResourcesContext'
import DementiaProvider from './DementiaContext'
import UserProvider from './UserContext'

export default function AllContextProvider({children}) {
    return (
        <ThemeProvider>
            <ResourceProvider>
                <DementiaProvider>
                    <UserProvider>
                        {children}
                    </UserProvider>
                </DementiaProvider>
            </ResourceProvider>
        </ThemeProvider>
    )
} 
