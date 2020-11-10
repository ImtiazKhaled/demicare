import React from 'react'
import db from '../components/common/Firebase'
import { getLanguage } from "react-switch-lang"

const ResourceContext = React.createContext()
const ResourceUpdateContext = React.createContext()
const ResourceAddContext = React.createContext()

export function useResource() {
    return React.useContext(ResourceContext)
}

export function useResourceUpdate() {
    return React.useContext(ResourceUpdateContext)
}

export function useAddResource() {
    return React.useContext(ResourceAddContext)
}

export default function ResourceProvider({ children }) {

    const [resources, setResources] = React.useState([])

    function changeResource() {
        db.collection("facilities").onSnapshot((snapshot) => {
            var data = []

            data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            if (getLanguage() !== "en") {
                data = data.filter((facility) => facility.lang === getLanguage() || facility.lang === 'en')
            }

            setResources(data)
        })
    }

    function addResource(resource) {
        const lang = resource.checkboxes[0] && resource.checkboxes[1] ? 'en' : resource.checkboxes[0] ? 'ko' : 'zh'

        const numberformatted = `${resource.number.substr(0, 3)}-${resource.number.substr(3, 6)}-${resource.number.substr(6)}`
        const websiteformatted = `http://${resource.website}/`
        var addressformatted = `https://www.google.com/maps/dir/0000,0000/`
        resource.address.split(' ').forEach(word => addressformatted += word + '+')


        // const description = `Phone number: ${numberformatted} <newline> Address: ${addressformatted} <newline> Website: ${websiteformatted}`
        const payload = { lang, title: resource.name, phoneNumber: numberformatted, url: websiteformatted, address: resource.address, gmaps: addressformatted }

        console.log(payload)

        db.collection("facilities").add(payload)
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });

        changeResource()
    }

    return (
        <ResourceContext.Provider value={resources}>
            <ResourceUpdateContext.Provider value={changeResource}>
                <ResourceAddContext.Provider value={addResource}>
                    {children}
                </ResourceAddContext.Provider>
            </ResourceUpdateContext.Provider>
        </ResourceContext.Provider>
    )
} 
