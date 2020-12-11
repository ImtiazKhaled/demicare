import * as React from "react"

import editIcon from "../assets/edit-regular.svg";
import {Input} from "baseui/input";
import db from '../components/common/Firebase'
import {Button, KIND, SIZE, SHAPE} from 'baseui/button';
import DementiaCard from './DementiaCard';
import {Textarea} from "baseui/textarea";
import {FlexGrid} from 'baseui/flex-grid';
import {FlexGridItem} from 'baseui/flex-grid';
import {t} from "react-switch-lang";

function AdminEditDementiaInfoCard(props) {

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");
    const [video, setVideo] = React.useState("");
    const [article, setArticle] = React.useState("");
    const [lang, setLang] = React.useState("");
    const [edit, setEdit] = React.useState(false);


    const handleEdit = () => {
        setTitle(props.title);
        setDescription(props.description);
        setImage(props.image);
        setVideo(props.video);
        setArticle(props.article);
        setLang(props.lang);
        setEdit(true);
    }

    const saveEntry = () => {

        console.log(video);
        db.collection('dementia-info').doc(props.id).set({

            description: description ? description : "",
            title: title ? title : "",
            video: video ? video : "",
            image: image ? image : "",
            article: article ? article : "",
            lang: lang ? lang : "",


        });

        setEdit(false);
    }

    const deleteEntry = () => {

        console.log(video);
        db.collection('dementia-info').doc(props.id).delete();

        setEdit(false);
    }
    const editMode = <div>

        <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder={t("articleTitle")}
            clearOnEscape
        />

        <br/>


        <Textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder={t("description")}
            clearOnEscape
        />

        <br/>


        <Input
            value={image}
            onChange={e => setImage(e.target.value)}
            placeholder={t("image")}
            clearOnEscape
        />
        <br/>

        <Input
            value={video}
            onChange={e => setVideo(e.target.value)}
            placeholder={t("video")}
            clearOnEscape
        />
        <br/>
        <Input
            value={article}
            onChange={e => setArticle(e.target.value)}
            placeholder={t("article")}
            clearOnEscape
        />


        <br/>
        <Input
            value={lang}
            onChange={e => setLang(e.target.value)}
            placeholder={t("language")}
            clearOnEscape
        />


        <br/>
        <br/>

        <Button shape={SHAPE.pill} onClick={() => saveEntry()}>{t("save")}</Button>
        <span>&nbsp;&nbsp;</span>
        <Button shape={SHAPE.pill} onClick={() => deleteEntry()}>{t("delete")}</Button>
        <span>&nbsp;</span>
        <Button shape={SHAPE.pill} onClick={() => setEdit(false)}>{t("cancel")}</Button>

    </div>;

    const displayMode = <Button kind={KIND.minimal}
                                size={SIZE.large}
                                shape={SHAPE.pill} style={{cursor: "pointer"}}>
        <img onClick={handleEdit} style={{width: 30, height: 30}} src={editIcon} alt="editIcon"/>

    </Button>


    const view = edit === true ? editMode : displayMode;

    return (
        <div>
            <FlexGrid
                flexGridColumnCount={[1, 1, 1, 2]}
                flexGridColumnGap="scale800"
                flexGridRowGap="scale800"
            >


                <FlexGridItem>
                    <DementiaCard {...props} />
                </FlexGridItem>

                <FlexGridItem style={{

                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    {view}
                </FlexGridItem>


            </FlexGrid>

            <br></br>


        </div>
    )
}

export default AdminEditDementiaInfoCard
