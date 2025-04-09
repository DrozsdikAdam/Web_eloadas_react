import React from 'react';
import Placeholder from '../images/image.png'
import Tictactoepic from '../images/tictactoepic.png'
import MemoryPic from '../images/memorypic.png'
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
        <h1 className={HomeStyles.title}>Memória Játék</h1>
          <img src={MemoryPic} className={HomeStyles.image} alt="" />
          <div className={HomeStyles.buttonGroup}>
          <button><Link className={HomeStyles.Link} to="/Memorygame">Start</Link></button>
          </div>
        </div>
      </div>
        </>
    )
}

export default Home;