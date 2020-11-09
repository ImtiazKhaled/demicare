import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from "baseui/tabs";
import AdminCommunityCard from './adminCommunityCard';

import { Display2 } from "baseui/typography";
import AddCommunity from './add_community'
import AdminEditDementiaInfo from './adminEditDementiaInfo';
export default function AdminEdit() {
    const [activeKey, setActiveKey] = useState("0")

    return (

        <Tabs
            onChange={({ activeKey }) => {
                setActiveKey(activeKey);
            }}
            activeKey={activeKey}
        >
            <Tab title={<h3>Community Resources</h3>}>

                <h2>Add New Facility</h2>
                <AddCommunity />
                <br>
                </br>
                <br>
                </br>

                <h2>List of Facilities</h2>
                <AdminCommunityCard />
            </Tab>
            <Tab title={<h3>Community Resources</h3>} >
                <AdminEditDementiaInfo />
            </Tab>

        </Tabs>
    );
}


