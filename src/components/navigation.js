import React from 'react'
import { Switch, Route } from "react-router-dom"
import Contact from './contact'
import Research from './research'

const Navigation = () => {
    return <Switch>
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