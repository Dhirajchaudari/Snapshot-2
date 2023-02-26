import React, { useContext, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Outlet, useNavigate } from "react-router-dom";
import { Store } from "../store/Strore";
import './Home.css'

export default function Home() {
  const inputVal = useRef(null)
  const { setSearch,setPageNumber } = useContext(Store);
  const navigate = useNavigate();

  function handleSearch() {
    setSearch(inputVal.current.value)
    // setSearch(e.target.value)
    setPageNumber(1)
    navigate("/category")
    
  }

  return (
    <>
      <div className="container">
        <h1 className="container-header">SnapShot</h1>
        <div className="btn-things">
          <input type="search" className="searchinp" placeholder="search..." onChange={`${inputVal}${setPageNumber(1)}`} />
          <button  onClick={() => {navigate("/category")}} style={{backgroundColor:"#171414",borderRadius:"5px",marginLeft:"5px",color:"white"}}> <SearchIcon /> </button>
        </div>

        <div className="btns" id="filterbtns">
          <button className="btn" onClick={handleSearch} value={"mountains"}>Mountains</button>
          <button className="btn" onClick={handleSearch} value={"beaches"}>Beaches</button>
          <button className="btn" onClick={handleSearch} value={"birds"}>Birds</button>
          <button className="btn" onClick={handleSearch} value={"food"}>Food</button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

