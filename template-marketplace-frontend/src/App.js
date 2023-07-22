import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import TemplateList from "./components/TemplateList";
import TemplateDetails from "./components/TemplateDetails";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import Signup from "./Containers/Signup";
import Login from "./Containers/Login";
import UploadTemplate from "./components/UploadTemplate";

import "./App.css";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/templates" element={<TemplateDetails />} />
            <Route path="/templates/:id" element={<TemplateList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/upload/template" element={<UploadTemplate />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
