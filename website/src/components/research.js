import React from "react";
import { Display2, Display4 } from "baseui/typography";
import { Button } from "baseui/button";
import Appointment from "./appointment";
import Calendly from "./calendly";

import { t } from "react-switch-lang";

const Research = () => {
  return (
    <div className="research-container">
      <Display2 marginBottom="scale1000"> {t("research")} </Display2>
      <Button onClick={() => window.open("https://dementiacaregiving.questionpro.com", "_blank")}> {t("onlineSurvey")} </Button>
      <Display4 marginTop="scale1000" marginBottom="scale800">
        {t("scheduleAPhoneInterview")}
      </Display4>
      <Calendly/>
    </div>
  );
};

export default Research;
