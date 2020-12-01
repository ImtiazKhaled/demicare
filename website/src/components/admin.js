import * as React from 'react'
import AdminEdit from './adminEdit'
import Login from './login'

import { useUser } from '../context/UserContext'


const Main = () => {

    const classes = style;
    const user = useUser()

    return (
        <div>

            <div style={classes.login}>
                <Login />
            </div>

            {user && <div> <AdminEdit /></div>}


        </div>

    )
}

export default Main

const style =
{
    login:
    {
        marginBottom: 10,
    },

}
