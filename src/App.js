import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Coins, Portfolio, Coin } from "pages";
import { GlobalStyle } from "styles/GlobalStyle";
import { themes } from "styles/colors";
import { Header } from "components";
import { MobileSearchModal } from "components/mobile-search";
import { Footer, MobileFooter } from "components/footer";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isMobileSearchActive, setIsMobileSearchActive] = useState(false);

  const getCurrentTheme = () => (isDarkTheme ? themes.dark : themes.light);

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  const handleMobileSearchClick = () => setIsMobileSearchActive(!isMobileSearchActive);

  return (
    <ThemeProvider theme={getCurrentTheme()}>
      <div className="App">
        <GlobalStyle theme={getCurrentTheme()} />
        <Router>
          <Header toggleTheme={toggleTheme} />
          <Switch>
            <Route path="/coins" component={Coins} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/coin/:id" component={Coin} />
            <Route
              path="*"
              render={() => <Redirect to="/coins" component={Coins} />}
            />
          </Switch>
          <Footer />
          <MobileSearchModal isActive={isMobileSearchActive} handleMobileSearchClick={handleMobileSearchClick}/>
          <MobileFooter handleMobileSearchClick={handleMobileSearchClick} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
