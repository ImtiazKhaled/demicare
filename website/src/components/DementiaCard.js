import * as React from "react"
import { Card, StyledBody, StyledAction } from "baseui/card"

import { Button, KIND, SHAPE } from "baseui/button";
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE, ROLE } from "baseui/modal"
import ReactMD from "react-markdown"

import { StyledLink } from "baseui/link";
import { t } from "react-switch-lang"

const DementiaCard = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const description =

    props.description === undefined || props.description === "" ? (
      ""
    ) : (
        <StyledBody>
          <ReactMD source={props.description.substring(0, 150)} />
        </StyledBody>
      );

  const video = () => {


    if (props.video === undefined || props.video === "") {
      return "";
    }
    else {
      let videoToPlay = props.video;
      videoToPlay.replace("watch?v=", "embed/");

      return (
        <div className="video-responsive">
          <iframe title="unique" width="500" height="315" src={videoToPlay} frameBorder="0" allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture" allowFullScreen></iframe>
        </div>)
    }

  }

  const article =
    props.article === undefined || props.article === "" ? (
      ""
    ) : (
        <StyledLink href={props.article}>
          {t("readArticle")}
        </StyledLink>
      )


  return (
    <div>
      <Card overrides={{ Root: { style: { width: "328px" } } }} headerImage={props.image} title={props.title}>
        {description}

        <StyledAction>
          <Button kind={KIND.secondary}
            shape={SHAPE.pill} onClick={() => setIsOpen(true)} overrides={{ BaseButton: { style: { width: "100%" } } }}>
            {t("more")}
          </Button>
        </StyledAction>
      </Card>

      <Modal onClose={() => setIsOpen(false)} closeable isOpen={isOpen} animate autoFocus size={SIZE.default} role={ROLE.dialog}>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>{props.description}</ModalBody>

        <ModalFooter>{video()}</ModalFooter>
        <ModalBody>{article}</ModalBody>

      </Modal>
    </div>
  )
}

export default DementiaCard
