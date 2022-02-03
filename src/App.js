import React from 'react';
import Navbar from './components/navbar';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Bollywood from './components/bollywood';
import Hollywood from './components/hollywood';
import Technology from './components/technology';
import Fitness from './components/fitness';
import Food from './components/food';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/bollywood" element={<Bollywood />}></Route>
    <Route path="/technology" element={<Technology />}></Route>
    <Route path="/hollywood" element={<Hollywood />}></Route>
    <Route path="/fitness" element={<Fitness />}></Route>
    <Route path="/food" element={<Food />}></Route>

    </Routes>
    </BrowserRouter>
    </>
   
  );
}
export default App;
