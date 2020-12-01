import * as React from 'react'
import chang from "../assets/img/chang.jpg"
import jessica from "../assets/img/jessica.jpg"
import kathy from "../assets/img/kathy.jpg"
import joe from "../assets/img/joe.jpg"
import { Card, StyledBody } from 'baseui/card'
import { Grid, Cell } from 'baseui/layout-grid'
import { t } from 'react-switch-lang'
import { Display4 } from 'baseui/typography'

const TeamCard = (props) => {

  const { member } = props

  return (
    <Card className="team-card">
        <Grid>
        <Cell span={[3]}>
            <img style={{width: '90%'}} src={member.image} alt={member.title}/>
        </Cell>
        <Cell span={[9]}>
            <Display4>
                {member.title}  
            </Display4>
            <StyledBody>
                {member.occupation}
            </StyledBody>
            <StyledBody>
                {member.location}
            </StyledBody>
            <StyledBody>
                {member.text}
            </StyledBody>
        </Cell>
        </Grid>
    </Card>
  )
}

const Team = () => {

  const teamMembers = [
    { image: kathy, title: t("kathy lee"), occupation: t("PHD, MSW"), location: t("kathy location"), text: t("kathy description") },
    { image: chang, title: t("chang hyun seo"), occupation: t("PHD, MSW"), location: t("chang location"), text: t("chang description") },
    { image: joe, title: t("joe zhao"), occupation: t("MSW"), location: t("joe location"), text: t("joe description") },
    { image: jessica, title: t("jessica cassidy"), occupation: t("MSW"), location: t("jessica location"), text: t("jessica description") },
  ]

  return <div className="grid"> 
    <Grid>
      {teamMembers.map((member) => 
        <Cell span={[12]}>
          <TeamCard member={member} />
        </Cell>
      )} 
    </Grid>
  </div>
}

export default Team


