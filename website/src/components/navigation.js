import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './about'
import Research from './research'
import Community from './community'
import Dementia from './dementia'
import Outreach from './outreach'
import SocialLinks from './social_links'
import Home from './home'
import Admin from './admin'
import { setLanguage, t } from 'react-switch-lang'
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE, ROLE } from 'baseui/modal'
import { ButtonGroup } from "baseui/button-group"
import { Button } from "baseui/button"
import NotFound from './not_found'
import { useResourceUpdate } from '../context/ResourcesContext'
import { firebaseApp as fire } from '../components/common/Firebase'
import { useUserUpdate } from '../context/UserContext'


const Navigation = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  const [lang, setLang] = React.useState('en')
  const updateResources = useResourceUpdate()
  const setUser = useUserUpdate()

  React.useEffect(() => {
    setIsOpen(true)
  }, [])

  const LanguageSelected = (selected) => {
    switch (selected) {
      case 'KOR':
        setLang('ko')
        setLanguage('ko')
        break
      case 'CHI':
        setLang('zh')
        setLanguage('zh')
        break
      default:
        setLang('en')
        setLanguage('en')
    }

    CloseModal()
  }

  const CloseModal = () => {
    updateResources()
    setIsOpen(false)
    
    const user = fire.auth().currentUser
    if(user !== null) {
      setUser(user.uid)
    }
  }

  return (
    <div>
      <Switch>
        <Route exact lang={lang} path='/community'>
          <Community />
        </Route>
        <Route exact path='/research'>
          <Research />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/dementia'>
          <Dementia />
        </Route>
        <Route exact path='/outreach'>
          <Outreach />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route exact path="/not-found">
          <NotFound />
        </Route>
        <Route exact path='/'>
          <Home lang={lang} />
        </Route>
        <Redirect to="/not-found" />
      </Switch>
    <Modal onClose={CloseModal} closeable isOpen={isOpen} animate autoFocus size={SIZE.auto} role={ROLE.dialog}>
      <ModalHeader> {t('welcomeTo,')} {t('researchProject')} </ModalHeader>
      <ModalBody>Select your preferred language</ModalBody>
      <ModalBody>选择您喜欢的语言</ModalBody>
      <ModalBody>선호하는 언어를 선택하십시오</ModalBody>
      <ModalBody>
        <ButtonGroup>
          <Button onClick={() => LanguageSelected('ENG')}>English</Button>
          <Button onClick={() => LanguageSelected('KOR')}>Korean</Button>
          <Button onClick={() => LanguageSelected('CHI')}>Chinese</Button>
        </ButtonGroup>
      </ModalBody>
      <ModalFooter><SocialLinks /></ModalFooter>
    </Modal>
    </div>
  )
}

export default Navigation
