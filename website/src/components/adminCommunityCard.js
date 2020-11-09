import React, { useState, useEffect } from 'react';
import AdminEditCommunityCard from "./adminEditCommunityCard"
import { useResource } from '../context/ResourcesContext'


function AdminCommunityCard() {

    const DATA = useResource()


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
