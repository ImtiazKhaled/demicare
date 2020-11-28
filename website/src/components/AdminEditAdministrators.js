import React from 'react'
import Profile from './Profile';
import AddAdmin from './AddAdmin';
import { t } from 'react-switch-lang';

export default function AdminEditAdministrators() {
    return (

        <div>

            <h2>{t("myProfile")}</h2>
            <Profile />

            <h2>{t("addAdmin")}</h2>

            <AddAdmin />

            {/* <h2>List of Admins</h2>
             */}

            <br></br>

        </div>
    )
}
