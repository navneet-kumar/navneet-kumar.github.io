import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, menuItems } from "./data/siteConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
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
