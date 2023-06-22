import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import './style/main.scss'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <Router>
    <Header/>
<Routes>
  <Route exact path='/' element={<Home/>}/>
</Routes>
    <Footer/>
 </Router>
  </React.StrictMode>
);
