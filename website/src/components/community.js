import React from "react"
import { Display2 } from "baseui/typography"
import { t } from "react-switch-lang"
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import CommunityCard from "./community_card"
// import AddCommunity from './add_community'
import { useResource } from '../context/ResourcesContext'
import { useUser } from '../context/UserContext'
import ComMap from "./map"

const Community = () => {
  const user = useUser()
  const DATA = useResource().sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="community-container">
      <Display2 marginBottom="scale1000"> {t("communityResources")} </Display2>

      <FlexGrid
        className="community-map"
        flexGridColumnCount={[1, 1, 2, 2]}
      >
        <FlexGridItem>
          {
            DATA.map((row, index) => (

              <CommunityCard key={index} id={index} {...row} />
            ))
          }
          {/* {
            user === null ?
              <div /> :
              <AddCommunity />
          } */}
        </FlexGridItem>

        <FlexGridItem>
          <ComMap />
        </FlexGridItem>
      </FlexGrid>
    </div>
  )

}


export default Community
