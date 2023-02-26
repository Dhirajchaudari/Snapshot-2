import React from "react";
import { Store } from "./Strore";
import { useState } from "react";

function StoreProvider(props) {
  let [search, setSearch] = useState("Random");
  let [pageNumber, setPageNumber] = useState(1);

  

  return (
    <Store.Provider value={{ search, setSearch, pageNumber, setPageNumber }}>
      {props.children}
    </Store.Provider>
  );
}
export default StoreProvider;