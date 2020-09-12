import React, { useState } from "react"
import { StatefulCalendar } from 'baseui/datepicker'
import { Button } from "baseui/button"
import { t, getLanguage } from "react-switch-lang"
import { enUS, ko, zhCN } from 'date-fns/locale'

const Appointment = () => {
  
  const scheduleInterview = () => {
    console.log("scheduling interview")
  }

  const OpenModal = (date) => {
    console.log('open a modal')
    console.log(date)
  }

  return (
    <div>
      <StatefulCalendar
        locale={
          getLanguage() === 'en' ? enUS : 
          getLanguage() === 'ko' ? ko :
          getLanguage() === 'zh' ? zhCN :
          enUS  
        }
        onChange={OpenModal}
      />
      <br /><br /><br />
      <Button onClick={() => scheduleInterview()}> {t("scheduleInterview")}</Button>
    </div>
  )

}

export default Appointment
