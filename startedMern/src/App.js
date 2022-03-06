import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/navbar.component";
import Third from "./Component/third.component";
import Fourth from "./Component/fourth.component";
import TableList from "./Component/table.component";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/third" element={<Third />} />
          <Route path="/table" element={<TableList />} />
          <Route path="/fourth" element={<Fourth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
