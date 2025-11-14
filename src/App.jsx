import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from "./???";


export default function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/????' element{<HomePage />} />
    </Routes>
    </BrowserRouter>
  );
}
