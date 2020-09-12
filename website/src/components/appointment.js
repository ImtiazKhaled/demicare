import React, { useState } from "react";
import { DatePicker } from "baseui/datepicker";
import { TimezonePicker } from "baseui/timezonepicker";
import { TimePicker } from "baseui/timepicker";
import { Button } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import { t } from "react-switch-lang";

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [tz, setZone] = useState({
    id: "America/Fort_Nelson",
    label: "MST - America/Fort Nelson (GMT -07:00)",
    offset: 420,
  });

  const scheduleInterview = () => {
    console.log("scheduling interview");
  };

  return (
    <div>
      <FormControl label={`${t("date")}`}>
        <DatePicker
          onChange={({ date }) => {
            setDate(date);
          }}
          value={new Date(date.getTime() + tz.offset * 60000)}
        />
      </FormControl>
      <FlexGrid flexGridColumnCount={2} flexGridColumnGap="scale800">
        <FlexGridItem>
          <FormControl label={`${t("timeZone")}`}>
            <TimezonePicker date={date} onChange={setZone} />
          </FormControl>
        </FlexGridItem>
        <FlexGridItem>
          <FormControl label={`${t("time")}`}>
            <TimePicker />
          </FormControl>
        </FlexGridItem>
      </FlexGrid>
      <Button onClick={() => scheduleInterview()}> {t("scheduleInterview")}</Button>
    </div>
  );
};

export default Appointment;
