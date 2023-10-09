import logo from './logo.svg';
import React, { useState,useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Home from './page/Home';



function App() {
  
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
            </Routes> 
          </Router>
    </div>
  );
}

export default App;
