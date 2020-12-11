import React from 'react';
import AdminEditCommunityCard from "./AdminEditCommunityCard"
import { useResource } from '../context/ResourcesContext'


function AdminEditCommunity() {

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

export default AdminEditCommunity
