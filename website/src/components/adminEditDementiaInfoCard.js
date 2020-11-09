import * as React from "react"
import editIcon from "../images/edit-solid.svg";
import { Input } from "baseui/input";

import db from '../components/common/Firebase'

import { Button, KIND, SIZE, SHAPE } from 'baseui/button';
import DementiaCard from './dementia_card';

import { Textarea } from "baseui/textarea";
import { Card } from "baseui/card";
import { FlexGrid } from 'baseui/flex-grid';
import { FlexGridItem } from 'baseui/flex-grid';

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

        <Button shape={SHAPE.pill} onClick={() => saveEntry()}>SAVE</Button>
        <span>&nbsp;&nbsp;</span>
        <Button shape={SHAPE.pill} onClick={() => setEdit(false)}>CANCEL</Button>

    </div>;

    const displayMode = <Button kind={KIND.minimal}
        size={SIZE.large}
        shape={SHAPE.pill} style={{ cursor: "pointer" }}>
        <img onClick={handleEdit} style={{ width: 30, height: 30 }} src={editIcon} alt="editIcon" />

    </Button>


    const view = edit === true ? editMode : displayMode;


    const itemProps = {
        backgroundColor: 'mono300',
        height: 'scale1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };


    const wideItemProps = {
        ...itemProps,
        overrides: {
            Block: {
                style: ({ $theme }) => ({
                    width: `calc((200% - ${$theme.sizing.scale800}) / 3)`,
                }),
            },
        },
    };


    return (
        <div>
            <Card>

                <FlexGrid
                    flexGridColumnCount={[1, 1, 1, 2]}
                    flexGridColumnGap="scale800"
                    flexGridRowGap="scale800"
                >
                    <FlexGridItem >
                        <DementiaCard {...props} />
                    </FlexGridItem>



                    <FlexGridItem style={{

                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        {view}
                    </FlexGridItem>

                </FlexGrid>









            </Card>
        </div>
    )
}

export default AdminEditDementiaInfoCard
