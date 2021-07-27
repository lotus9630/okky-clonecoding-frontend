import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  Home,
  Login,
  Register,
  QA,
  Tech,
  Community,
  Column,
  Jobs,
} from "./router/index";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/articles/qa" exact component={QA} />
      <Route path="/articles/tech" exact component={Tech} />
      <Route path="/articles/community" exact component={Community} />
      <Route path="/articles/column" exact component={Column} />
      <Route path="/articles/jobs" exact component={Jobs} />
    </BrowserRouter>
  );
}

export default App;
