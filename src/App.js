import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import * as Pages from "./pages/";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Pages.Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
