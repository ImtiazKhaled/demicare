import * as React from "react"
import { StyledRow, StyledCell } from "baseui/table"
import { StyledBodyCell } from "baseui/table-grid"
import ReactMD from "react-markdown"

const CommunityRow = (props) => {

    const [ markdown, setMarkdown ] = React.useState(props.description)

    const getLocation = () => {
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition( (position) => {
            var tempMarkdown = markdown.replace('0000',position.coords.latitude.toString()) 
            tempMarkdown = tempMarkdown.replace('0000',position.coords.longitude.toString()) 
            tempMarkdown = tempMarkdown.replaceAll('<newline>',`\n\n`)
            setMarkdown(tempMarkdown)
          })            
        } else {
          console.error('This browser does not support locations')
        }
    }
      
    React.useEffect(() => {
        getLocation()
    }, [props.description])

    return (
        <StyledRow key={props.id}>
            <StyledCell>
                <StyledBodyCell>{props.title}</StyledBodyCell>
            </StyledCell>
            <StyledCell>
                <StyledBodyCell>
                <ReactMD source={markdown} />
                </StyledBodyCell>
            </StyledCell>
        </StyledRow>
    )
}

export default CommunityRow