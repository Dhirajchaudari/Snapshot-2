import React from "react";
import Route from "./router/Route";
import StoreProvider from "./store/StoreProvider";

export default function App() {
  return (
    <>
      <StoreProvider>
        <Route />
      </StoreProvider>
    </>
  );
}