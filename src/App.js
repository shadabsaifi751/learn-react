import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./App.scss";
import Home from "./components/home";
import Nav from "./components/Nav";
import Edit from "./pages/edit";
import List from "./pages/list";
import Form from "./pages/form";
import Cartitems from "./pages/cartitems";
import Button from "./pages/buttons";
// import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/edit">
          <Edit />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/cartitems">
          <Cartitems />
        </Route>
        <Route path="/buttons">
          <Button />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
