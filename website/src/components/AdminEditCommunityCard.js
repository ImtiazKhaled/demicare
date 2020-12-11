import * as React from "react"
import { Card } from "baseui/card"
import { PhoneInput } from "baseui/phone-input";
import { Input } from "baseui/input";

import { t } from "react-switch-lang"
import { Button, KIND, SIZE, SHAPE } from 'baseui/button';
import { StyledLink } from "baseui/link";

import editIcon from "../assets/edit-regular.svg";
import db from '../components/common/Firebase'
import { H6 } from 'baseui/typography';
import { FlexGrid } from 'baseui/flex-grid';
import { FlexGridItem } from 'baseui/flex-grid';


const CommunityRow = (props) => {
    const [addressToDisplay, setAddressToDisplay] = React.useState(props.gmaps);
    const tel = `tel:${props.phoneNumber}`;

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
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

    const [edit, setEdit] = React.useState(false);

    const [title, setTitle] = React.useState("");

    const [url, setUrl] = React.useState("");
    const [country, setCountry] = React.useState(undefined);
    const [phoneNumber, setPhoneNumber] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [gmaps, setGmaps] = React.useState("");
    const [lang, setLang] = React.useState("");
    const [iframe, setIframe] = React.useState("");



    const handleEdit = () => {
        setTitle(props.title);
        setUrl(props.url);
        setCountry(undefined);
        setPhoneNumber(props.phoneNumber);
        setAddress(props.address);
        setGmaps(props.gmaps);
        setIframe(props.iframe);
        setLang(props.lang);
        setEdit(true);
    }


    const saveEntry = () => {

        let addressformatted = `https://www.google.com/maps/dir/0000,0000/`;
        let addressTemp = address;
        addressTemp.split(' ').forEach(word => addressformatted += word + '+');

        setGmaps(addressformatted);

        db.collection('facilities').doc(props.id).set({
            address: address ? address : "",
            description: "",
            gmaps: addressformatted ? addressformatted : "",
            iframe: iframe ? iframe : "",
            lang: lang ? lang : "",
            phoneNumber: phoneNumber ? phoneNumber : "",
            title: title ? title : "",
            url: url ? url : ""

        });

        setEdit(false);
    }

    const deleteEntry = () => {
        db.collection('facilities').doc(props.id).delete();

        setEdit(false);
    }



    const displayMode = <FlexGrid
        flexGridColumnCount={[1, 1, 1, 2]}
        flexGridColumnGap="scale800"
        flexGridRowGap="scale800"


    >
        <FlexGridItem > <H6>{props.title}</H6></FlexGridItem>

        <FlexGridItem >
            <p> {t("phoneNumber")} :   &nbsp; <a href={tel}>{props.phoneNumber}</a></p>
            <p>{t("address")} : &nbsp;
            <StyledLink href={addressToDisplay}>
                    {props.address}
                </StyledLink>
            </p>


            <p>{t("website")} : &nbsp;
            <StyledLink href={props.url}>
                    {t("linkToWebsite")}
                </StyledLink>
            </p>


            <Button kind={KIND.minimal}
                size={SIZE.large}
                shape={SHAPE.pill} style={{ cursor: "pointer" }}>
                <img onClick={handleEdit} style={{ width: 30, height: 30 }} src={editIcon} alt="editIcon" />

            </Button>

        </FlexGridItem>



    </FlexGrid>





    const editMode = <div >

        <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder={t("facilityName")}
            clearOnEscape
        />

        <br />



        <Input
            value={url}
            onChange={e => setUrl(e.target.value)}
            placeholder={t("website")}
            clearOnEscape
        />

        <br />



        <Input
            value={address}
            onChange={e => setAddress(e.target.value)}
            placeholder={t("address")}
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
            placeholder={t("gmapsLink")}
            clearOnEscape
        />

        <br />
        <Input
            value={iframe}
            onChange={e => setIframe(e.target.value)}
            placeholder="iframe"
            clearOnEscape
        />


        <br />
        <Input
            value={lang}
            onChange={e => setLang(e.target.value)}
            placeholder={t("languages")}
            clearOnEscape
        />

        <br />
        <br />



        <Button shape={SHAPE.pill} onClick={() => saveEntry()}>{t("save")}</Button>
        <span>&nbsp;</span>
        <Button shape={SHAPE.pill} onClick={() => deleteEntry()}>{t("delete")}</Button>
        <span>&nbsp;</span>
        <Button shape={SHAPE.pill} onClick={() => setEdit(false)}>{t("cancel")}</Button>



    </div>

    const view = edit === true ? editMode : displayMode;


    return (
        <Card >

            {view}

        </Card>
    )
}

export default CommunityRow
