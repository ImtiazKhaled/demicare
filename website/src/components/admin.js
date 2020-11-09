import * as React from 'react'
import AdminEdit from './adminEdit'
import Login from './login'


const Main = () => {

    const classes = style;

    return (
        <div>

            <div style={classes.login}>
                <Login />
            </div>

            <div style={classes.container}> <AdminEdit /></div>


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
    container:
    {
        margin: 40
    }
}
