import React from 'react'
import { Switch, Route } from "react-router-dom"
import Contact from './contact'
import Research from './research'
import Community from './community'

const Navigation = () => {
    return <Switch>
        <Route path="/community">
            <Community />
        </Route>
        <Route path="/research">
            <Research />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/">
            <div />
        </Route>
    </Switch>
}

  export default Navigation