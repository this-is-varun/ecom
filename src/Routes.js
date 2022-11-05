import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './components/Checkout';
import App from './App';

const Main = () => {
  return (
    <>
          <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/checkout" element={<Checkout />} />
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default  Main 

