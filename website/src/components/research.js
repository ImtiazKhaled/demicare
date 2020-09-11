import React from "react";
import { Display2, Display4 } from "baseui/typography";
import { Button } from "baseui/button";
import Appointment from "./appointment";

import { t } from "react-switch-lang";

const Research = () => {
  return (
    <div className="research-container">
      <Display2 marginBottom="scale1000"> {t("research")} </Display2>
      <Button onClick={() => window.open("https://dementiacaregiving.questionpro.com", "_blank")}> Online Survery </Button>
      <Display4 marginTop="scale1000" marginBottom="scale800">
        {" "}
        Schedule a Phone Interview{" "}
      </Display4>
      <Appointment />
    </div>
  );
};

export default Research;
