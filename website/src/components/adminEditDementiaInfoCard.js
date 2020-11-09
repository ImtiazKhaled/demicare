import * as React from "react"
import editIcon from "../images/edit-solid.svg";
import { Input } from "baseui/input";

import db from '../components/common/Firebase'
import { ButtonGroup, SHAPE } from "baseui/button-group";
import { Button } from 'baseui/button';
import { StyledRow, StyledCell } from "baseui/table"
import { StyledBodyCell } from "baseui/table-grid"
import DementiaCard from './dementia_card';

import { Textarea } from "baseui/textarea";
import { Card } from "baseui/card";

function AdminEditDementiaInfoCard(props) {

    const [isOpen, setIsOpen] = React.useState(false);

    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");
    const [video, setVideo] = React.useState("");
    const [edit, setEdit] = React.useState(false);


    const handleEdit = () => {
        setTitle(props.title);
        setDescription(props.description);
        setImage(props.image);
        setVideo(props.video);
        setEdit(true);
    }

    const saveEntry = () => {
        db.collection('dementia-info').doc(props.id).set({

            description: description,
            title: title,
            video: video,
            image: image,

        });

        setEdit(false);
    }
    const editMode = <div >

        <Input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Information Title"
            clearOnEscape
        />

        <br />



        <Textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
            clearOnEscape
        />

        <br />



        <Input
            value={image}
            onChange={e => setImage(e.target.value)}
            placeholder="Image"
            clearOnEscape
        />
        <br />

        <Input
            value={video}
            onChange={e => setVideo(e.target.value)}
            placeholder="Video"
            clearOnEscape
        />


        <br />
        <br />

        <ButtonGroup shape={SHAPE.pill}>

            <Button onClick={() => saveEntry()}>SAVE</Button>

            <Button onClick={() => setEdit(false)}>CANCEL</Button>

        </ButtonGroup>

    </div>;

    const displayMode = <a style={{ cursor: "pointer" }}>
        <img onClick={handleEdit} style={{ width: 30, height: 30 }} src={editIcon} alt="editIcon" />

    </a>









    const view = edit === true ? editMode : displayMode;

    return (
        <div>
            <Card>
                <StyledRow>

                    <StyledCell>

                        <StyledBodyCell>

                            <DementiaCard {...props} />

                        </StyledBodyCell>

                    </StyledCell>


                    <StyledCell>
                        <StyledBodyCell>

                            {view}

                        </StyledBodyCell>

                    </StyledCell>


                </StyledRow>


            </Card>
        </div>
    )
}

export default AdminEditDementiaInfoCard
