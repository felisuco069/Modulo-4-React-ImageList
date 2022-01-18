import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DogsPage } from "./dogs-list";
import { CatsPage } from "./cats-list";
// import { CartList } from "cart-list";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DogsPage />} />
          <Route path="/cats" element={<CatsPage />} />
        </Routes>
      </Router>
      {/* <CartList /> */}
    </>
  );
};
