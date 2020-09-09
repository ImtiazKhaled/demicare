import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import ReactMD from "react-markdown";

const DementiaCard = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Card overrides={{ Root: { style: { width: "328px" } } }} headerImage={props.image} title={props.title}>
        <StyledBody>
          <ReactMD source={props.description} />
        </StyledBody>

        <StyledAction>
          <Button onClick={() => setIsOpen(true)} overrides={{ BaseButton: { style: { width: "100%" } } }}>
            More
          </Button>
        </StyledAction>
      </Card>

      <Modal onClose={() => setIsOpen(false)} closeable isOpen={isOpen} animate autoFocus size={SIZE.default} role={ROLE.alertdialog}>
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.</ModalBody>
        <ModalFooter>
          <ModalButton kind={ButtonKind.tertiary}>Cancel</ModalButton>
          <ModalButton>Okay</ModalButton>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DementiaCard;
