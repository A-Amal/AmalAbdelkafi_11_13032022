
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import Home from "./pages/Home"
import About from "./pages/About";
import Apartment from "./pages/Apartment";
import "./styles/App.css"

function App() {
  return (
      <Router>
          <Header />
          <main className="main">
              <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/appartement/:id" exact element={< Apartment />} />
                  <Route path="/about" exact element={<About />} />
                  <Route path="/404" exact element={<Error />} />
                  <Route path="*" element={<Error />} />
              </Routes>
          </main>
          <Footer />
      </Router>
  );
}

export default App;
