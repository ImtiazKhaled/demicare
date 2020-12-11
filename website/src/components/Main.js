import * as React from 'react'
import Menu from './Menu'
import Navigation from './Navigation'
import { BaseProvider } from "baseui"
import { useTheme } from '../context/ThemeContext'
import { translate } from "react-switch-lang"

const Main = () => {
const theme = useTheme()

    return (
        <BaseProvider theme={theme}>
            <Menu />
            <Navigation changeTheme={() => console.log('lol')} />
        </BaseProvider>
    )
}

export default translate(Main)
