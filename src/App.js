import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./router/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
