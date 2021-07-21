import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./router/Home";
import Register from "./router/Register";
import Login from "./router/Login";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </BrowserRouter>
  );
}

export default App;
