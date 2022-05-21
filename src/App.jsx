import React from "react";
import "./components/App.css";
import Fetch from "./components/Fetch";

function App() {
  
  return ( 
      <div className=" grid place-items-center  " >
        <div className=" student-card group">
        <Fetch />
        </div>
      </div>
  );
}

export default App;
