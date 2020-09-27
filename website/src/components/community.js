import * as React from 'react'
import { StyledTable, StyledHead, StyledHeadCell, StyledBody } from 'baseui/table'
import { Display2 } from 'baseui/typography'
import { Button } from 'baseui/button'
import { t, getLanguage } from 'react-switch-lang'
import CommunityRow from './community_row'
import DATA from './common/community.json'

const Community = (props) => {

  const [ resources, setResources ] = React.useState(DATA)

  const showAllLocations = () => {
    console.log('should show all maps now')
  }

  React.useEffect(() => {
    switch(getLanguage()) {
      case 'ko':
        setResources(DATA.filter( row => row.lang === 'korean'))
        break
      case 'zh':
        setResources(DATA.filter( row => row.lang === 'chinese'))
        break
      default:
        break
    }
  },[props.lang])
  
  return (
    <div className='community-container'>
      <Display2 marginBottom='scale1000'> {t('communityResources')} </Display2>
      <Button onClick={() => showAllLocations()}> {t('seeFacilities')} </Button> <br /> <br />
      <StyledTable>
        <StyledHead>
          <StyledHeadCell>{t('title')}</StyledHeadCell>
          <StyledHeadCell>{t('resource')}</StyledHeadCell>
        </StyledHead>
        <StyledBody>
          {resources.map((row, index) => (
            <CommunityRow key={index} id={index} {...row} />
          ))}
        </StyledBody>
      </StyledTable>
      <div style={{margin: '10vh'}} />
    </div>
  )
}

export default Community