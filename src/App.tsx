import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { HomePage } from "./pages/index"

import { Navbar } from "./components/navbar"

import { GlobalStyle } from "./styles/global"

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
      <GlobalStyle />
    </Router>
  )
}

export default App
