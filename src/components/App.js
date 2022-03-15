
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header";
import React from "react";
import Footer from "./Footer";

function App() {
  return (
    <div >
        <BrowserRouter>
            <Header />
            <main className="main">
            {/*
            <Routes>
                <Route exact path="/" element={<IndexPage />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/renting/:id" element={<RentingPage />}/>
          <Route path="/*" element={<ErrorPage />}/>
                               <Route exact path="/">
                                   <Home />
                               </Route>
                               <Route path="/survey/:questionNumber">
                                   <Survey />
                               </Route>
                               <Route path="/results">
                                   <Results />
                               </Route>
                               <Route path="/freelances">
                                   <Freelances />
                               </Route>
                               <Route>
                                   <Error />
                               </Route>

            </Routes> */}
            </main>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
