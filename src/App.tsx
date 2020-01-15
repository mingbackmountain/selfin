import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { HomePage } from "./pages/index"

import { Navbar } from "./components/Navbar"

import { GlobalStyle } from "./styles/global"

import { AssetProvider, initAsset } from "./contexts/asset"

const App: React.FC = () => {
  return (
    <AssetProvider value={initAsset}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <GlobalStyle />
      </Router>
    </AssetProvider>
  )
}

export default App
