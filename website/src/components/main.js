import * as React from 'react'
import Menu from './menu'
import Navigation from './navigation'
import { BaseProvider } from "baseui"
import { useTheme } from '../context/ThemeContext'
import { useResourceUpdate } from '../context/ResourcesContext'
import { UserContext } from '../context/UserContext'

import { translate } from "react-switch-lang";

const Main = () => {

    const [user, setUser] = React.useState('')

    const updateResources = useResourceUpdate();
    const theme = useTheme()

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BaseProvider theme={theme}>
                <Menu />
                <Navigation changeTheme={() => console.log('lol')} />
            </BaseProvider>
        </UserContext.Provider>
    )
}

export default translate(Main);
