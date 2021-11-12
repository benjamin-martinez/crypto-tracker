import React from "react"
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { themes } from "./styles/colors";
import Header from "./components/header/Header";

class App extends React.Component {

  state = {
    theme: themes.dark
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="App">
          <GlobalStyle />
          <Header />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
