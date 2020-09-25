import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button, KIND as ButtonKind } from "baseui/button";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from "baseui/modal";
import ReactMD from "react-markdown";
import { t } from "react-switch-lang";
import { Textarea } from "baseui/textarea";

const DementiaCard = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const video =
    props.video === undefined || props.video === "" ? (
      ""
    ) : (
      <div className="video-responsive">
        <iframe title="unique" width="500" height="315" src={props.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    );

  return (
    <div>
      <Card overrides={{ Root: { style: { width: "328px" } } }} headerImage={props.image} title={props.title}>
        <StyledBody>
          <ReactMD source={props.description} />
        </StyledBody>

        <StyledAction>
          <Button onClick={() => setIsOpen(true)} overrides={{ BaseButton: { style: { width: "100%" } } }}>
            {t("more")}
          </Button>
        </StyledAction>
      </Card>

      <Modal onClose={() => setIsOpen(false)} closeable isOpen={isOpen} animate autoFocus size={SIZE.auto} role={ROLE.dialog}>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>{props.description}</ModalBody>

        <ModalBody></ModalBody>

        <ModalFooter>{video}</ModalFooter>
      </Modal>
    </div>
  );
};

export default DementiaCard;
