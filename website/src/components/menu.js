import * as React from 'react'
import { AppNavBar, setItemActive } from 'baseui/app-nav-bar'
import { useHistory } from 'react-router-dom'
import { StyledLink } from 'baseui/link'
import { translate, t } from 'react-switch-lang'
import { useUser, useUsername, useUserUpdate } from '../context/UserContext'
import { firebaseApp as fire } from './common/Firebase'

function Menu() {

  const user = useUser()
  const username = useUsername()
  const setUser = useUserUpdate()

  let history = useHistory()

  let [mainItems, setMainItems] = React.useState([])

  mainItems = [
    { key: 'community', label: t('communityResources') },
    { key: 'dementia', label: t('dementiaInformation') },
    { key: 'research', label: t('research') },
    { key: 'outreach', label: t('outreach') },
    { key: 'about', label: t('aboutUs') },
  ]

  const appDisplayName = (
    <StyledLink
      $style={{
        textDecoration: 'none',
        color: 'inherit',
        ':hover': { color: 'inherit', cursor: 'pointer' },
        ':visited': { color: 'inherit' },
      }}
      onClick={() => { setMainItems(prev => setItemActive(prev, { label: 'whatis', active: false })); history.push('/') }}
    >
      {t('researchProject')}
    </StyledLink>
  )

  const onItemSelect = (item) => {
    setMainItems(prev => setItemActive(prev, item))
    switch (item.key) {
      case 'community':
        history.push('/community')
        break
      case 'research':
        history.push('/research')
        break
      case 'about':
        history.push('/about')
        break
      case 'outreach':
        history.push('/outreach')
        break
      case 'dementia':
        history.push('/dementia')
        break
      case 'team':
        history.push('/team')
        break
      default:
        history.push('/')
        break
    }
  }

  return user === null ?
    <AppNavBar
      title={appDisplayName}
      mainItems={mainItems}
      onMainItemSelect={onItemSelect}
    /> : <AppNavBar
      title={appDisplayName}
      mainItems={mainItems}
      onMainItemSelect={onItemSelect}
      username={username}
      userItems={[
        { label: 'Admin Tab', tab: '/admin' },
        { label: 'Next Iteration', tab: '/future' },
        { label: 'Log Out', tab: '/logout' }
      ]}
      onUserItemSelect={(item) => {
        if (item.tab === '/logout') {
          fire.auth().signOut()
          setUser(' ')
        } else {
          history.push(item.tab)
        }
      }}
    />
}

export default translate(Menu)
