import React from "react"
import logo from './logo.svg';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { themes } from "./styles/colors";

class App extends React.Component {

  state = {
    theme: themes.dark
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="App">
          <GlobalStyle />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
