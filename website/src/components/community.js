import React from "react"
import { StyledTable, StyledHead, StyledHeadCell, StyledBody } from "baseui/table"
import { Display2 } from "baseui/typography"
import { Button } from "baseui/button"
import { t } from "react-switch-lang"
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import CommunityRow from "./community_row"
import AddCommunity from './add_community'
import { useResource } from '../context/ResourcesContext'
import { useUser } from '../context/UserContext'
import  Map from "./map"


const Community = () => {
  const user = useUser()
  const DATA = useResource()

  const [visible,setVisible]=React.useState(false)

  const itemProps = {
    height:'scale1000',
    display:'Flex',
    alignItems:'center',
    justifyContent:'center',
  }

  const showAllLocations = () => {
    setVisible(!visible)
  }

  return (
    <FlexGrid
    flexGridColumnCount={2}
    flexGridColumnGap="scale800"
    flexDirection="row"
    >

    <div className="community-container">
      <Display2 marginBottom="scale1000"> {t("communityResources")} </Display2>
      <Button onClick={() => showAllLocations()}> {t("seeFacilities")} </Button> <br /> <br />
      {/* <FlexGridItem {...itemProps}> */}
      {visible?<Map/>:null}
      {/* </FlexGridItem> */}
      <StyledTable>
        <StyledHead>
          <StyledHeadCell>{t("title")}</StyledHeadCell>
          <StyledHeadCell>{t("resource")}</StyledHeadCell>
        </StyledHead>
        <StyledBody>
          {DATA.map((row, index) => (
            <CommunityRow key={index} id={index} {...row} />
          ))}
          {
            user === null ? 
            <div /> : 
            <AddCommunity />
          }
        </StyledBody>
      </StyledTable>
      <div style={{ margin: "10vh" }} />
     
    </div>
   </FlexGrid>
  )

}


export default Community
