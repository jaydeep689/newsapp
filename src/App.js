import "./App.css";
import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import News from "./component/News";  

export default class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/"><News key="general" pageSize={8} category="general" country="us"></News></Route>
          <Route exact path="/business"><News key="business"pageSize={8} category="business" country="us"></News></Route>
          <Route exact path="/entertainment"><News key="entertainment"pageSize={8} category="entertainment" country="us"></News></Route>
          <Route exact path="/health"><News key="health" pageSize={8} category="health" country="us"></News></Route>
          <Route exact path="/science"><News key="science" pageSize={8} category="science" country="us"></News></Route>
          <Route exact path="/sports"><News key="sports"pageSize={8} category="sports" country="us"></News></Route>
          <Route exact path="/technology"><News key="technology" pageSize={8} category="technology" country="us"></News></Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
