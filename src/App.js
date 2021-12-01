import React, { useState } from "react"
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom";
import { Coins, Portfolio, Coin } from "pages";
import { GlobalStyle } from "styles/GlobalStyle";
import { themes } from "styles/colors";
import Header from "components/header/Header/Header";

function App() {
  const [theme, setTheme] = useState(themes.dark)

  const toggleTheme = () => {
    if(theme === themes.dark) {
      setTheme(themes.light)
    } else {
      setTheme(themes.dark)
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle theme={theme}/>
        <Router >
          <Header toggleTheme={toggleTheme}/>
          <Switch>
            <Route path="/coins" component={Coins} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/coin/:id" component={Coin} />
            <Route path="*" render={() => <Redirect to="/coins" component={Coins} />}/>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App;
