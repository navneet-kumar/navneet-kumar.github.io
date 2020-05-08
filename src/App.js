import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme, menuItems } from "./data/siteConfig";

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    padding-bottom: 50px;
    position: relative;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          {menuItems.map((element, index) => (
            <Route
              exact
              key={index}
              path={element.path}
              component={element.component}
            />
          ))}
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
