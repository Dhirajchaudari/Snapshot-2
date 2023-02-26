import React, { useContext } from "react";
import { Store } from "../store/Strore";
import "./buttons.css"

function Buttons() {
    const {pageNumber,setPageNumber} =useContext(Store)

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: "25px 25px" }}>     
        {pageNumber > 0 &&<button className="pagebtns" onClick={()=>{setPageNumber(pageNumber-1)}}>Prev Page</button>}
        {pageNumber > 0 && <span style={{ width: "50px", padding: "5px 5px",textAlign:"center",fontWeight:"bolder"}}>{pageNumber}</span>}
        <button className="pagebtns" onClick={() => { setPageNumber(pageNumber + 1) }}>Next Page</button>
        </div>
    );
}

export default Buttons;