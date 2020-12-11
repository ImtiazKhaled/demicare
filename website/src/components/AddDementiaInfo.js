import React from 'react'
import db from '../components/common/Firebase'

import { Button, SHAPE } from 'baseui/button';
import { t } from "react-switch-lang";
import { Textarea } from "baseui/textarea";
import { Input } from "baseui/input";
import { Card } from 'baseui/card';

export default function AddDementiaInfo() {

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");
    const [video, setVideo] = React.useState("");
    const [lang, setLang] = React.useState("");
    const [article, setArticle] = React.useState("");


    const saveEntry = () => {

        db.collection('dementia-info').doc().set({
            description: description ? description : "",
            title: title ? title : "",
            video: video ? video : "",
            article: article ? article : "",
            image: image ? image : "",
            lang: lang ? lang : "",

        });

        alert("Article Added!!!")

        setTitle("");
        setDescription("");
        setImage("");
        setVideo("");

    }
    return (
        <Card>

            <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder={t("articleTitle")}
                clearOnEscape
            />

            <br />

            <Textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder={t("description")}
                clearOnEscape
            />
            <br />

            <Input
                value={image}
                onChange={e => setImage(e.target.value)}
                placeholder={t("image")}
                clearOnEscape
            />
            <br />

            <Input
                value={video}
                onChange={e => setVideo(e.target.value)}
                placeholder={t("video")}
                clearOnEscape
            />

            <br />
            <Input
                value={article}
                onChange={e => setArticle(e.target.value)}
                placeholder={t("article")}
                clearOnEscape
            />

            <br />
            <Input
                value={lang}
                onChange={e => setLang(e.target.value)}
                placeholder={t("language")}
                clearOnEscape
            />


            <br />
            <br />

            <Button shape={SHAPE.pill} onClick={() => saveEntry()}>{t("save")}</Button>
        </Card>
    )
}
