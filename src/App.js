import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Header />
        <Footer />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
