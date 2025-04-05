import React from 'react';
import Home from './Home';
import Tictactoe from './Tictactoe';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TicTacToe" element={<Tictactoe />} />
      </Routes>
    </>
  )
}

export default App
