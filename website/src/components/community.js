import React from "react"
import { StyledTable, StyledHead, StyledHeadCell, StyledBody } from "baseui/table"
import { Display2 } from "baseui/typography"
import { t } from "react-switch-lang"
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import CommunityRow from "./community_row"
import AddCommunity from './add_community'
import { useResource } from '../context/ResourcesContext'
import { useUser } from '../context/UserContext'
import ComMap from "./map"


const Community = () => {
  const user = useUser()
  const DATA = useResource()

  return (
    <div className="community-container">
      <Display2 marginBottom="scale1000"> {t("communityResources")} </Display2>

      <FlexGrid
        className="community-map"
        flexGridColumnCount={2}
      >
        <FlexGridItem>
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
        </FlexGridItem>

        <FlexGridItem>
          <ComMap />
        </FlexGridItem>
      </FlexGrid>
    </div>
  )

}


export default Community
