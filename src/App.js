import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import LibertyBridge from "./Components/LibertyBridge"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}  />
        <Route path="/liberty-bridge-analysis" element={<LibertyBridge />} />
        <Route component={Error} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
