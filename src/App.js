import React from "react"
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom";
import { Coins, Portfolio, Coin } from "pages";
import { GlobalStyle } from "styles/GlobalStyle";
import { themes } from "styles/colors";
import Header from "components/header/Header/Header";

class App extends React.Component {
  state = {
    isDarkTheme: true
  }

  getCurrentTheme = () => this.state.isDarkTheme ? themes.dark : themes.light

  toggleTheme = () => this.setState({isDarkTheme: !this.state.isDarkTheme})

  render() {
    return (
      <ThemeProvider theme={this.getCurrentTheme()}>
        <div className="App">
          <GlobalStyle theme={this.getCurrentTheme()}/>
          <Router >
            <Header toggleTheme={this.toggleTheme}/>
            <Switch>
              <Route path="/coins" component={Coins} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/coin/:id" component={Coin} />
              <Route path="*" render={() => <Redirect to="/coins" component={Coins} />}/>
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
