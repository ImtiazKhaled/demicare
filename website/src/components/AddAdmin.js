import React from 'react'
import { Card, StyledBody } from 'baseui/card';
import { t } from "react-switch-lang"
import { Button, SHAPE } from 'baseui/button';
import { Input } from "baseui/input";
import db from '../components/common/Firebase';
import { auth } from '../components/common/Firebase';


export default function AddAdmin() {

    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    const saveEntry = async () => {
        try {
            let response = await auth.createUserWithEmailAndPassword(email, password)
            if (response) {
                alert("Admin Created!")

                db.collection('admin').doc(response.user.uid).set({

                    firstName: firstName ? firstName : "",
                    lastName: lastName ? lastName : "",
                    email: email ? email : "",
                    password: password ? password : ""

                });

                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
            }
        }
        catch (e) {
            alert("Failure!!! Try again later");
        }




    }
    return (
        <Card
            overrides={{ Root: { style: { width: '328px' } } }}
        // headerImage={'https://source.unsplash.com/user/erondu/700x400'}
        // title={username}
        >
            <StyledBody>
                <Input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder={t("firstName")}
                    clearOnEscape
                />

                <br></br>

                <Input
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder={t("lastName")}
                    clearOnEscape
                />

                <br></br>
                <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t("email")}
                    clearOnEscape
                />

                <br></br>
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={t("password")}
                    type="password"
                    clearOnEscape
                />

                <br></br>

                <Button shape={SHAPE.pill} onClick={() => saveEntry()}>{t("save")}</Button>


                {/* {view} */}
                {/* Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
            ornare faucibus ex, non facilisis nisl. */}
            </StyledBody>
            {/* <StyledAction>
           
        </StyledAction> */}
        </Card>
    )
}
