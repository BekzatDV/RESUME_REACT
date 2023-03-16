import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import ResumeList from "./Components/ResumeList";
import Hobby from "./Components/Hobby";
import Makers from "./Components/Makers";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ResumeList />} />
          <Route path="/hobby" element={<Hobby />} />
          <Route path="/makers" element={<Makers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
