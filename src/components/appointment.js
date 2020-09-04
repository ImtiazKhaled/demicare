import React, { useState } from 'react'
import { DatePicker } from 'baseui/datepicker'
import { TimezonePicker } from 'baseui/timezonepicker'
import { TimePicker } from 'baseui/timepicker'
import { FormControl } from 'baseui/form-control'
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid'


const Appointment = () => {
  const [date, setDate] = useState(new Date());
  const [tz, setZone] = useState({
    id: 'America/Fort_Nelson',
    label: 'MST - America/Fort Nelson (GMT -07:00)',
    offset: 420,
  });
  
  return <div>
    <FormControl label="Date">
      <DatePicker
        onChange={({date}) => {
          setDate(date)
        }}
        value={new Date(date.getTime() + tz.offset * 60000)}
      />
    </FormControl>
    <FlexGrid
      flexGridColumnCount={2}
      flexGridColumnGap="scale800"
    >
    <FlexGridItem>
      <FormControl label="Timezone">
        <TimezonePicker date={date} onChange={setZone} />
      </FormControl>    
    </FlexGridItem>
    <FlexGridItem>
      <FormControl label="Time">
        <TimePicker />
      </FormControl>
    </FlexGridItem>
    </FlexGrid>
  </div>
}

export default Appointment