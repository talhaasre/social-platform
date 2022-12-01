import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./common.scss";
import Routing from "./Routing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Routing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
