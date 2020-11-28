import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './about'
import Research from './research'
import Community from './community'
import Dementia from './dementia'
import Outreach from './outreach'
import Team from './team'
import SocialLinks from './social_links'
import Home from './home'
import Admin from './admin'
import Next from './next_iteration'
import { setLanguage, t } from 'react-switch-lang'
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE, ROLE } from 'baseui/modal'
import { ButtonGroup } from "baseui/button-group"
import { Button } from "baseui/button"
import NotFound from './not_found'
import { useResourceUpdate } from '../context/ResourcesContext'
import { firebaseApp as fire } from '../components/common/Firebase'
import { useUserUpdate } from '../context/UserContext'

import { StatefulButtonGroup, MODE } from 'baseui/button-group';
import { getLanguage } from 'react-switch-lang';

const Navigation = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  let lang = 0;
  const updateResources = useResourceUpdate()
  const setUser = useUserUpdate()

  if (getLanguage() === "en") {
    lang = 0;
  }
  else if (getLanguage() === "ko") {
    lang = 1;
  }
  else if (getLanguage() === "zh") {
    lang = 2;
  }

  React.useEffect(() => {
    setIsOpen(true)
  }, [])

  const LanguageSelected = (selected) => {
    setLanguage(selected)
    CloseModal()
  }

  const CloseModal = () => {
    updateResources()
    setIsOpen(false)

    const user = fire.auth().currentUser
    if (user !== null) {
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
        <Route path='/team'>
          <Team />
        </Route>
        <Route path='/team'>
          <Team />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
        <Route exact path="/not-found">
          <NotFound />
        </Route>
        <Route exact path='/'>
          <Home lang={getLanguage} />
        </Route>
        <Route exact path='/future'>
          <Next />
        </Route>
        <Redirect to="/not-found" />

      </Switch>

      <Modal onClose={CloseModal} closeable isOpen={isOpen} animate autoFocus size={SIZE.auto} role={ROLE.dialog}>
        <ModalHeader> {t('welcomeTo')} {t('researchProject')} </ModalHeader>
        <ModalBody>{t("languageSelection")}</ModalBody>
        {/* <ModalBody>选择您喜欢的语言</ModalBody>
        <ModalBody>선호하는 언어를 선택하십시오</ModalBody> */}
        <ModalBody>
          <StatefulButtonGroup
            mode={MODE.radio}
            initialState={{ selected: lang }}
          >
            <Button onClick={() => LanguageSelected('en')}>English</Button>
            <Button onClick={() => LanguageSelected('ko')}>Korean</Button>
            <Button onClick={() => LanguageSelected('zh')}>Chinese</Button>
          </StatefulButtonGroup>
        </ModalBody>
        <ModalFooter><SocialLinks /></ModalFooter>
      </Modal>
    </div>
  )
}

export default Navigation
