import React from 'react';
import Home from './Home';
import Tictactoe from './Tictactoe';
import { Routes, Route } from 'react-router-dom';
import Memory from './Memory.jsx';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TicTacToe" element={<Tictactoe />} />
        <Route path="/Memorygame" element={<Memory />} />
      </Routes>
    </>
  )
}
export default App
