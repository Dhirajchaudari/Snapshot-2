import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Displayer from "../components/Displayer";
import Home from "../components/Home";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          >
            <Route path="/category" element={<Displayer />} />
          </Route>
          <Route path="*" element={<h1>page NOT Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}