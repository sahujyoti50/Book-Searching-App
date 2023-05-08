import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Search from "./Component/Search";
import AddToSave from "./Component/AddToSave";
import WelcomePage from "./Component/WelcomePage";
function App() {
  return (
    <div>
      <h3 className="appHeading">
      Book Finder Application
      </h3>
      <hr />
      <Switch>
        <Route path="/" exact>
          <WelcomePage />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/addtosave">
          <AddToSave />
        </Route>
      </Switch>
    </div>
    
  );
}
export default App;
