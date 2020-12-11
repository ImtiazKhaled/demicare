import React, {useEffect} from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from './About'
import Research from './Research'
import Community from './Community'
import Dementia from './Dementia'
import Outreach from './Outreach'
import Team from './Team'
import SocialLinks from './SocialLinks'
import Home from './Home'
import Admin from './Admin'
import { setLanguage, t } from 'react-switch-lang'
import { Modal, ModalHeader, ModalBody, ModalFooter, SIZE, ROLE } from 'baseui/modal'
import { Button } from "baseui/button"
import NotFound from './NotFound'
import { useResourceUpdate } from '../context/ResourcesContext'
import { firebaseApp as fire } from '../components/common/Firebase'
import { useUserUpdate } from '../context/UserContext'

import { StatefulButtonGroup, MODE } from 'baseui/button-group';
import { getLanguage } from 'react-switch-lang';
import Cookies from 'universal-cookie';


const Navigation = () => {

  const [isOpen, setIsOpen] = React.useState(false)
  let lang = 0;
  const updateResources = useResourceUpdate()

  const setUser = useUserUpdate()

  const user = fire.auth().currentUser

  const cookies = new Cookies();


  useEffect(() =>
  {


    if (user !== null) {
      setUser(user.uid)
    }

    updateResources();
  }, [])

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
    setIsOpen(false)
    cookies.set("firstTimeUse", false, { path: '/' });

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
        <Redirect to="/not-found" />

      </Switch>

      {cookies.get('firstTimeUse') === undefined && < Modal onClose={CloseModal} closeable isOpen={isOpen} animate autoFocus size={SIZE.auto} role={ROLE.dialog}>
        <ModalHeader> {t('welcomeTo')} {t('researchProject')} </ModalHeader>
        <ModalBody>{t("languageSelection")}</ModalBody>
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
      </Modal>}
    </div>
  )
}

export default Navigation
