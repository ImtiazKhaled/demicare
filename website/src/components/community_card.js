import * as React from "react"
import { StyledRow, StyledCell } from "baseui/table"
import { StyledBodyCell } from "baseui/table-grid"
import { Card } from "baseui/card"
import ReactMD from "react-markdown"

import { StyledLink } from "baseui/link";


const CommunityRow = (props) => {
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
    <Card>
      <StyledRow key={props.id}>
        <StyledCell>
          <StyledBodyCell>{props.title}</StyledBodyCell>
        </StyledCell>
        <StyledCell>
          <StyledBodyCell>
            <p> Phone Number :   &nbsp; <a href={tel}>{props.phoneNumber}</a></p>

            <p>Address : &nbsp;
              <StyledLink href={address}>
                {props.address}
              </StyledLink>
            </p>


            <p>Website : &nbsp;
              <StyledLink href={props.url}>
                Link to Website
             </StyledLink>
            </p>

          </StyledBodyCell>
        </StyledCell>
      </StyledRow>
    </Card>
  )
}

export default CommunityRow
