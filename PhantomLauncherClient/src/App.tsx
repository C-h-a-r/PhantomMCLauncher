import "./App.css";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/common/navbar/navbar";

import Home from "./components/pages/home/home";

function App() {
 
  return (
    <>
    <Navbar avatar="/icons/logo.png"/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
