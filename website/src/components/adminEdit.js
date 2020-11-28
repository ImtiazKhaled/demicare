import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from "baseui/tabs";
import AdminEditCommunity from './adminEditCommunity';
import { t } from "react-switch-lang"
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
            <Tab title={<h3>{t("communityResources")}</h3>}>

                <h2>{t("addNewFacilities")}</h2>
                <AddCommunity />
                <br>
                </br>
                <br>
                </br>

                <h2>{t("listOfFacilities")}</h2>
                <AdminEditCommunity />
            </Tab>
            <Tab title={<h3>{t("dementiaInformation")}</h3>} >
                <AdminEditDementiaInfo />
            </Tab>

        </Tabs>
    );
}


