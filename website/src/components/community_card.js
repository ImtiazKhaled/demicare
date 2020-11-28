import * as React from "react"
import { StyledRow, StyledCell } from "baseui/table"
import { StyledBodyCell } from "baseui/table-grid"
import { Card } from "baseui/card"
import ReactMD from "react-markdown"

import { StyledLink } from "baseui/link";
import { t } from "react-switch-lang"


const AdminEditCommunityCard = (props) => {
  // const [markdown, setMarkdown] = React.useState(props.description)
  const [address, setAddress] = React.useState(props.gmaps);
  const tel = `tel:${props.phoneNumber}`;

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // var tempMarkdown = markdown.replace("0000", position.coords.latitude.toString())
        // tempMarkdown = tempMarkdown.replace("0000", position.coords.longitude.toString())
        // tempMarkdown = tempMarkdown.replaceAll("<newline>", `\n\n`)
        // setMarkdown(tempMarkdown)

        let tempAddress = address.replace("0000", position.coords.latitude.toString());
        tempAddress = tempAddress.replace("0000", position.coords.longitude.toString());
        setAddress(tempAddress);
      })
    } else {
      console.error("This browser does not support locations")
    }
  }

  React.useEffect(() => {
    getLocation()
  }, [props.description])




  return (
    <Card title={props.title}>
      <StyledRow key={props.id}>
        {/* <StyledCell>
          <StyledBodyCell><h3>{props.title}</h3></StyledBodyCell>
        </StyledCell> */}
        <StyledCell>
          <StyledBodyCell>
            <p> {t("phoneNumber")} :   &nbsp; <a href={tel}>{props.phoneNumber}</a></p>

            <p> {t("address")} : &nbsp;
              <StyledLink href={address}>
                {props.address}
              </StyledLink>
            </p>


            <p> {t("website")} : &nbsp;
              <StyledLink href={props.url}>
                {t("linkToWebsite")}
              </StyledLink>
            </p>

          </StyledBodyCell>
        </StyledCell>
      </StyledRow>
    </Card>
  )
}

export default AdminEditCommunityCard
