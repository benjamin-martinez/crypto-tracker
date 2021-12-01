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
    theme: themes.dark
  }
  toggleTheme = () => {
    if(this.state.theme === themes.dark) {
      this.setState({theme: themes.light})
    } else {
      this.setState({theme: themes.dark})
    }
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="App">
          <GlobalStyle theme={this.state.theme}/>
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
