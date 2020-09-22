import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from './contact'
import Research from './research'
import Community from './community'
import Dementia from './dementia'
import Outreach from './outreach'
import Home from './home'
import Team from './team'

const Navigation = (props) => {
    
    return <Switch>
        <Route path='/community'>
            <Community />
        </Route>
        <Route path='/research'>
            <Research />
        </Route>
        <Route path='/contact'>
            <Contact />
        </Route>
        <Route path='/dementia'>
            <Dementia />
        </Route>
        <Route path='/outreach'>
            <Outreach />
        </Route>
        <Route path='/team'>
            <Team />
        </Route>
        <Route path='/'>
            <Home changeTheme={() => props.changeTheme()} />
        </Route>
    </Switch>
    
}

  export default Navigation