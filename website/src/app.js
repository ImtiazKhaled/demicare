import React from "react"
import Main from "./components/main"
import { Provider as StyletronProvider } from "styletron-react"
import { Client as Styletron } from "styletron-engine-atomic"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import PropTypes from "prop-types"
import en from "./components/common/english.json"
import zh from "./components/common/chinese.json"
import ko from "./components/common/korean.json"
import { setTranslations, setDefaultLanguage, translate, setLanguageCookie } from "react-switch-lang"
import AllContextProvider from './context/AllContext'

setTranslations({ en, zh, ko })
setDefaultLanguage("en")
setLanguageCookie("language", { path: "/", maxAge: 157680000 }, undefined)

const engine = new Styletron()

const App = () => {

  return (
    <AllContextProvider>
      <StyletronProvider value={engine}>
        <Router>
          <Main />
        </Router>
      </StyletronProvider>
    </AllContextProvider>
  )
}

App.propTypes = {
  t: PropTypes.func.isRequired,
}

export default translate(App)
