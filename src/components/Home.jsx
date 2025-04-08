import React from 'react';
import Placeholder from '../images/image.png'
import Tictactoepic from '../images/tictactoepic.png'
import HomeStyles from '../styles/home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        <div className={HomeStyles.container}>
        <div className={HomeStyles.card}>
          <h1 className={HomeStyles.title}>Tic-tac-toe Game</h1>
          <img src={Tictactoepic} className={HomeStyles.image} alt="Tic-tac-toe" />
          <div className={HomeStyles.buttonGroup}>
              <button><Link className={HomeStyles.Link} to="/TicTacToe">Start</Link></button>
          </div>
        </div>
        <div className={HomeStyles.card}>
        <h1 className={HomeStyles.title}>Valami másik Project</h1>
          <img src={Placeholder} className={HomeStyles.image} alt="" />
          <div className={HomeStyles.buttonGroup}>
              <button>Start</button>
          </div>
        </div>
      </div>
        </>
    )
}

export default Home;