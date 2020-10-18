import * as React from 'react'
import db from '../components/common/Firebase'

const UserContext = React.createContext(null);
const UsernameContext = React.createContext(null);
const UserUpdateContext = React.createContext(null)

export function useUser() {
    return React.useContext(UserContext)
}

export function useUsername() {
    return React.useContext(UsernameContext)
}

export function useUserUpdate(uid) {
    console.log(uid)
    return React.useContext(UserUpdateContext)
}

const UserProvider = ({ children }) => {

    const [user, setUser] = React.useState({})
    const [username, setUsername] = React.useState('')

    function changeUser(uid) {
        if(uid !== "") {
            db.collection("admin").doc(uid).onSnapshot((snapshot) => {
                setUser(snapshot.data())
                setUsername(snapshot.data().firstName + " " + snapshot.data().lastName)
            })
        }
    }

    return (
        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={changeUser}>
                <UsernameContext.Provider value={username}> 
                    {children}
                </UsernameContext.Provider>
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
} 


export default UserProvider