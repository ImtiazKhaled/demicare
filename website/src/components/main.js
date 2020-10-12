import * as React from 'react'
import Menu from './menu'
import Navigation from './navigation'
import { BaseProvider } from "baseui"
import { useTheme } from '../context/ThemeContext'


const Main = () => {

    const theme = useTheme()

    return (
        <BaseProvider theme={theme}>
            <Menu />
            <Navigation changeTheme={() => console.log('lol')} />
        </BaseProvider>
    )
}

export default Main