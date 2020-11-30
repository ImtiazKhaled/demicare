import React from 'react'
import { Card, StyledBody } from 'baseui/card';
import { t } from "react-switch-lang"
import { useUsername } from '../context/UserContext'
import db from '../components/common/Firebase'
import { auth } from '../components/common/Firebase'

import { Button, SHAPE } from 'baseui/button';
import { Input } from "baseui/input";

export default function Profile() {

    const username = useUsername()

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [edit, setEdit] = React.useState(false);


    const handleEdit = () => {

        let temp = username.split(" ");
        setFirstName(temp[0]);
        setLastName(temp[1]);
        setEdit(true);
    }

    const saveEntry = () => {

        // console.log(video);
        db.collection('admin').doc(auth.currentUser.uid).set({

            firstName: firstName ? firstName : "",
            lastName: lastName ? lastName : ""

        });

        setEdit(false);
    }

    const editMode = <div >
        <Input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            placeholder="First Name"
            clearOnEscape
        />

        <br></br>

        <Input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            placeholder="Last Name"
            clearOnEscape
        />

        <br></br>

        <Button shape={SHAPE.pill} onClick={() => saveEntry()}>{t("save")}</Button>
        <span>&nbsp;</span>
        <Button shape={SHAPE.pill} onClick={() => setEdit(false)}>{t("cancel")}</Button>
    </div>

    const displayMode = <div> <Button onClick={handleEdit} overrides={{ BaseButton: { style: { width: '100%' } } }}>
        {t("edit")}
    </Button></div>

    const view = edit === true ? editMode : displayMode;

    return (
        <Card
            overrides={{ Root: { style: { width: '328px' } } }}
            // headerImage={'https://source.unsplash.com/user/erondu/700x400'}
            title={username}
        >
            <StyledBody>
                {view}
                {/* Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                ornare faucibus ex, non facilisis nisl. */}
            </StyledBody>
            {/* <StyledAction>
               
            </StyledAction> */}
        </Card>
    )
}
