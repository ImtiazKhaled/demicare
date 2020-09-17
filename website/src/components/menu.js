import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { StyledLink } from 'baseui/link'
import { ChevronDown, Delete } from 'baseui/icon'
import { Unstable_AppNavBar as AppNavBar, POSITION } from 'baseui/app-nav-bar'

function renderItem(item) {
  return item.label
}

const MAIN_NAV = [
    {
        icon: ChevronDown,
        item: {label: 'Languages'},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
        navExitIcon: Delete,
        navPosition: {desktop: POSITION.horizontal},
        nav: [
            {
              item: {label: 'English'},
              mapItemToNode: renderItem,
              mapItemToString: renderItem,
              },{
              item: {label: 'Chinese'},
              mapItemToNode: renderItem,
              mapItemToString: renderItem,
            },{
              item: {label: 'Korean'},
              mapItemToNode: renderItem,
              mapItemToString: renderItem,
            },
        ],
    },{
        item: {label: 'Community Resources'},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },{
        item: {label: 'Dementia Information'},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },{
        item: {label: 'Research'},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },{
        item: {label: 'Outreach'},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },{
        item: {label: 'Contact Us'},
        mapItemToNode: renderItem,
        mapItemToString: renderItem,
    },{
      item: {label: 'Team'},
      mapItemToNode: renderItem,
      mapItemToString: renderItem,
  }
]

function isActive(arr, item, activeItem) {
  let active = false
  for (let i = 0; i < arr.length; i++) {
    const elm = arr[i]
    if (elm === item) {
      if (item === activeItem) return true
      return isActive(
        (item && item.nav) || [],
        activeItem,
        activeItem,
      )
    } else if (elm.nav) {
      active = isActive(elm.nav || [], item, activeItem)
    }
  }
  return active
}
const Menu = () => {

  let history = useHistory()
  const [activeNavItem, setActiveNavItem] = React.useState()
  
  const appDisplayName = (
    <StyledLink
      $style={{
        textDecoration: 'none',
        color: 'inherit',
        ':hover': {color: 'inherit'},
        ':visited': {color: 'inherit'},
      }}
      href={'/'}
    >
      Research Project
    </StyledLink>
  )

  const onNavChange = ({item}) => {
    const newItem = item.item.label 
    if (item === activeNavItem) return
    switch(newItem) {
      case 'Community Resources':
        history.push('/community')
        break
      case 'Research':
        history.push('/research')
        break
      case 'Contact Us':
        history.push('/contact')
        break
      case 'Team':
        history.push('/team')
        break
      case 'Outreach':
        history.push('/outreach')
        break
      case 'Dementia Information':
        history.push('/dementia')
        break
      case 'English':
        break
      case 'Korean':
        break
      case 'Chinese':
        break
      case 'Languages':
        break
      default:
        history.push('/')
        break
    }
    setActiveNavItem(item)
  }
  
  return <AppNavBar
    appDisplayName={appDisplayName}
    mainNav={MAIN_NAV}
    isNavItemActive={({item}) => {
      return (
        item === activeNavItem ||
        isActive(MAIN_NAV, item, activeNavItem)
      )
    }}
    onNavItemSelect={onNavChange}
  />
}

export default Menu