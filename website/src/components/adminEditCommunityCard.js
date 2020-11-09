import * as React from "react"
import { StyledRow, StyledCell } from "baseui/table"
import { StyledBodyCell } from "baseui/table-grid"
import { Card } from "baseui/card"
import { PhoneInput } from "baseui/phone-input";
import { Input } from "baseui/input";

import { ButtonGroup, SHAPE } from "baseui/button-group";
import { Button } from 'baseui/button';
import { StyledLink } from "baseui/link";

import editIcon from "../images/edit-solid.svg";
import db from '../components/common/Firebase'


const CommunityRow = (props) => {
    // const [markdown, setMarkdown] = React.useState(props.description)
    const [addressToDisplay, setAddressToDisplay] = React.useState(props.gmaps);
    const tel = `tel:${props.phoneNumber}`;

    const [edit, setEdit] = React.useState(false);

    const [title, setTitle] = React.useState(props.title);

    const [url, setUrl] = React.useState(props.url);
    const [country, setCountry] = React.useState(undefined);
    const [phoneNumber, setPhoneNumber] = React.useState(props.phoneNumber);
    const [address, setAddress] = React.useState(props.address);
    const [gmaps, setGmaps] = React.useState(props.gmaps);
    const [lang, setLang] = React.useState(props.lang);



    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // var tempMarkdown = markdown.replace("0000", position.coords.latitude.toString())
                // tempMarkdown = tempMarkdown.replace("0000", position.coords.longitude.toString())
                // tempMarkdown = tempMarkdown.replaceAll("<newline>", `\n\n`)
                // setMarkdown(tempMarkdown)

                let tempAddress = addressToDisplay.replace("0000", position.coords.latitude.toString());
                tempAddress = tempAddress.replace("0000", position.coords.longitude.toString());
                setAddressToDisplay(tempAddress);
            })
        } else {
            console.error("This browser does not support locations")
        }
    }

    React.useEffect(() => {
        getLocation()
    }, [props.description])


    const displayMode = <StyledRow key={props.id}>  <StyledCell>
        <StyledBodyCell><h3>{props.title}</h3></StyledBodyCell>
    </StyledCell>
        <StyledCell>
            <StyledBodyCell>
                <p> Phone Number :   &nbsp; <a href={tel}>{props.phoneNumber}</a></p>

                <p>Address : &nbsp;
                <StyledLink href={address}>
                        {props.address}
                    </StyledLink>
                </p>


                <p>Website : &nbsp;
                <StyledLink href={props.url}>
                        Link to Website
            </StyledLink>
                </p>


                <a style={{ cursor: "pointer" }}>
                    <img onClick={() => setEdit(true)} style={{ width: 30, height: 30 }} src={editIcon} alt="editIcon" />

                </a>



            </StyledBodyCell>


        </StyledCell>
    </StyledRow>;




    const saveEntry = () => {
        db.collection('facilities').doc(props.id).set({
            address: address,
            description: "Phone number: [713-271-6100](tej:7132716100) <newline> Address: [9800 Town Park, Houston, TX 77036](https://www.google.com/maps/dir/0000,0000/9800+Town+Park+Dr,+Houston,+TX+77036) <newline> Website: [ccchouston.org](https://ccchouston.org/)",
            gmaps: gmaps,
            lang: lang,
            phoneNumber: phoneNumber,
            title: title,
            url: url

        });

        setEdit(false);
    }

    const editMode = <div >

        <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Facility Name"
            clearOnEscape
        />

        <br />



        <Input
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder="URL"
            clearOnEscape
        />

        <br />



        <Input
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder="Address"
            clearOnEscape
        />
        <br />

        <PhoneInput
            country={country}
            onCountryChange={({ option }) => setCountry(option)}
            text={phoneNumber}
            onTextChange={e => setPhoneNumber(e.currentTarget.value)}
        />


        <br />
        <Input
            value={gmaps}
            onChange={e => setGmaps(e.target.value)}
            placeholder="Google Maps Link"
            clearOnEscape
        />


        <br />
        <Input
            value={lang}
            onChange={e => setLang(e.target.value)}
            placeholder="Language"
            clearOnEscape
        />

        <br />
        <br />

        <ButtonGroup shape={SHAPE.pill}>

            <Button onClick={() => saveEntry()}>SAVE</Button>

            <Button onClick={() => setEdit(false)}>CANCEL</Button>

        </ButtonGroup>




        {/* <input type="text" className="form-control my-2" value={matchFr} placeholder="matchFr" onChange={(e) => setMatchFr(e.target.value)} />
    <input type="text" className="form-control my-2" value={match} placeholder="match" onChange={(e) => setMatch(e.target.value)} />
    <input type="text" className="form-control my-2" value={word} placeholder="word" onChange={(e) => setWord(e.target.value)} />
    <input type="text" className="form-control my-2" value={plural} placeholder="plural" onChange={(e) => setPlural(e.target.value)} />
    <input type="text" className="form-control my-2" value={meaning} placeholder="meaning" onChange={(e) => setMeaning(e.target.value)} />
    <input type="text" className="form-control my-2" value={synonyms} placeholder="synonyms" onChange={(e) => setSynomyms(e.target.value)} />
    <input type="text" className="form-control my-2" value={wordType} placeholder="wordType" onChange={(e) => setWordType(e.target.value)} />
    <input type="text" className="form-control my-2" value={audio} placeholder="audio" onChange={(e) => setAudio(e.target.value)} />

    <button onClick={save} type="submit" className="btn btn-primary" >SUBMIT</button> */}
    </div>

    const view = edit === true ? editMode : displayMode;


    return (
        <Card>

            {view}

        </Card>
    )
}

export default CommunityRow
