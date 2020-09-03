import React from 'react'
import Menu from './components/menu'
import Navigation from './components/navigation'
import { Provider as StyletronProvider } from 'styletron-react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { LightTheme, BaseProvider } from 'baseui'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

const engine = new Styletron()

function App() {
  return <Router>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Menu />
        <Navigation />
      </BaseProvider>
    </StyletronProvider> 
  </Router>
}

export default App
