import React, { useState } from 'react'
import Menu from './components/menu'
import Navigation from './components/navigation'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { LightTheme, BaseProvider } from 'baseui'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

const engine = new Styletron()


const App = () => {

  const [ theme, changeTheme ] = useState(LightTheme)

  document.documentElement.style.setProperty('background', theme.colors.background);
  
  return <StyletronProvider value={engine}>
    <Router>
      <BaseProvider theme={theme}>
        <Menu />
        <Navigation />
      </BaseProvider>
    </Router>
  </StyletronProvider> 
}

export default App
