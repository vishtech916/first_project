import React from "react";
import "./Spinner.css";

const Spinner=()=>{
    return(
        <div className="flex flex-col gap-3 items-center space-y-2">
            <div className="spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
            <p className="text-blue-950 text-lg font-semibold">Loading...</p>
        </div>
    )
}
export default Spinner;