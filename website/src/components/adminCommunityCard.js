import React from 'react';
import AdminEditCommunityCard from "./adminEditCommunityCard"
import { useResource } from '../context/ResourcesContext'


function AdminCommunityCard() {

    const DATA = useResource().sort((a, b) => a.title.localeCompare(b.title));


    return (
        <div >
            {
                DATA.map((row, index) => (
                    <AdminEditCommunityCard key={index} id={index} {...row} />
                ))
            }

        </div>
    )
}

export default AdminCommunityCard
