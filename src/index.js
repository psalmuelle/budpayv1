import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./components/home/Home";
import "./style/main.scss";
import store from "./controller/store";
import { Provider,  } from "react-redux";
import { Details } from "./components/home/details/Details";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path="/cart/:id" element={<Details/>}/>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);
