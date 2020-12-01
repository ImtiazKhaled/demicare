import React from "react"
import { Display2 } from "baseui/typography"
import { t } from "react-switch-lang"
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import CommunityCard from "./community_card"
// import AddCommunity from './add_community'
import { useResource } from '../context/ResourcesContext'
import { useUser } from '../context/UserContext'
import { Button } from 'baseui/button'
const Community = () => {
  const user = useUser()
  const DATA = useResource().sort((a, b) => a.title.localeCompare(b.title));
  const [mapShown, setMapShown] = React.useState(false)
  const [loc, setLoc] = React.useState('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107391.31682908858!2d-97.28740522833378!3d32.73975757528782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d72c77456ab%3A0x5eb1f21e1d55e19a!2sUTA%20College%20of%20Engineering!5e0!3m2!1sen!2sus!4v1606603291038!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>')
  
  return (
    <div className="community-container">
      <Display2 marginBottom="scale1000"> {t("communityResources")} </Display2>

      {mapShown? <>
        <Button style={{position:'fixed', top:'69%', width:'150', zIndex:1 }} onClick={event => {
            setMapShown(!mapShown)
          }}>{t("Hide Map")}</Button>
          
          </>:
          <Button style={{width:150}} onClick={event => {
            setMapShown(!mapShown)
          }}>{t("Show Map")}</Button>}

      <FlexGrid
        className="community-map"
        flexGridColumnCount={[1, 1, mapShown?2:1, mapShown?2:1]}>

        {mapShown && 
          <FlexGridItem>
            {<div dangerouslySetInnerHTML={{ __html: loc }} style={{position:'fixed', zIndex:1 }} />}
          </FlexGridItem>
        }

        <FlexGridItem style={{marginTop: mapShown?'0':'0'}}>
          {
            DATA.map((row, index) => (
              <>
                <CommunityCard key={index} id={index} {...row} select={setLoc} />
              </>
            ))
          }
        </FlexGridItem>

        
      </FlexGrid>
    </div>
  )

}


export default Community
