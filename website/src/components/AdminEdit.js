import React, { useState } from 'react';
import { Tabs, Tab } from "baseui/tabs";
import AdminEditCommunity from './AdminEditCommunity';
import { t } from "react-switch-lang"
import AddCommunity from './AddCommunity'
import AdminEditDementiaInfo from './AdminEditDementiaInfo';
import AdminEditAdministrators from './AdminEditAdministrators';
import AddDementiaInfo from './AddDementiaInfo';
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
                <h2>{t("addArticle")}</h2>
                <AddDementiaInfo />
                <h2>{t("listOfArticles")}</h2>
                <AdminEditDementiaInfo />
            </Tab>

            <Tab title={<h3>{t("administrators")}</h3>} >
                <AdminEditAdministrators />
            </Tab>

        </Tabs>
    );
}


