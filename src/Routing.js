import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import NotFound from "./pages/NotFound/NotFound";
import { notfoundURL } from "./utils/paths";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to={notfoundURL} />} />
      </Routes>
    </>
  );
};

export default Routing;
