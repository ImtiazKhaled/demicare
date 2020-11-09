import React from 'react'
import db from '../components/common/Firebase'

const DementiaContext = React.createContext()
const DementiaUpdateContext = React.createContext()

export function useDementia() {
    return React.useContext(DementiaContext)
}

export function useDementiaUpdate() {
    return React.useContext(DementiaUpdateContext)
}

export default function DementiaProvider({ children }) {

    const [dementia, setDementia] = React.useState([])

    function changeDementia() {
        db.collection("dementia-info").onSnapshot(
            (snapshot) => {
                console.log('this is called')
                setDementia(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                )
            });
    }

    return (
        <DementiaContext.Provider value={dementia}>
            <DementiaUpdateContext.Provider value={changeDementia}>
                {children}
            </DementiaUpdateContext.Provider>
        </DementiaContext.Provider>
    )
} 
