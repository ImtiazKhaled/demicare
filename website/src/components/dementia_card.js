import * as React from "react";
import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button } from "baseui/button";
import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from "baseui/modal";
import { KIND as ButtonKind } from "baseui/button";
import ReactMD from "react-markdown";
import { t } from "react-switch-lang";

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
            {t("more")}
          </Button>
        </StyledAction>
      </Card>

      <Modal onClose={() => setIsOpen(false)} closeable isOpen={isOpen} animate autoFocus size={SIZE.default} role={ROLE.alertdialog}>
        <ModalHeader>{props.title}</ModalHeader>
        <ModalBody>{props.description}</ModalBody>
        <ModalFooter>
          <ModalButton kind={ButtonKind.tertiary}>{t("cancel")}</ModalButton>
          <ModalButton>{t("okay")}</ModalButton>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DementiaCard;
