import React from 'react'
import db from '../components/common/Firebase'
import { getLanguage } from "react-switch-lang";

const ResourceContext = React.createContext()
const ResourceUpdateContext = React.createContext()

export function useResource() {
    return React.useContext(ResourceContext)
}

export function useResourceUpdate() {
    return React.useContext(ResourceUpdateContext)
}

export default function ResourceProvider({ children }) {

    const [resources, setResources] = React.useState([])

    function changeResource() {
        db.collection("facilities").onSnapshot((snapshot) => {
            var data = []

            data = snapshot.docs.map((doc) => doc.data())
            if (getLanguage() !== "en") {
                data = data.filter((facility) => facility.lang === getLanguage());
            }

            setResources(data)
        });
    }

    return (
        <ResourceContext.Provider value={resources}>
            <ResourceUpdateContext.Provider value={changeResource}>
                {children}
            </ResourceUpdateContext.Provider>
        </ResourceContext.Provider>
    )
} 
