import React, { useState } from 'react';
import TictactoeStyles from '../styles/tictactoe.module.css';
import { Link } from 'react-router-dom';
import Board from './Board';

const Tictactoe = () => {
    const [winner, setWinner] = useState(null);
    const [player, setPlayer] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [gameBoard, setGameBoard] = useState(Array(9).fill(' '));
    const [started, setStarted] = useState(false);
    const [counter, setCounter] = useState(0); 

    const resetGame = () => {
        setWinner(null);
        setGameBoard(Array(9).fill(' '));
        setPlayer(null);
        setPlayer2(null);
        setStarted(false);
        setCounter(0); 
    };

    return (
        <div className={TictactoeStyles.container}>
            <h1 className={TictactoeStyles.title}>Tic Tac Toe Game</h1>
            <div className={TictactoeStyles.gameBoard}>
                <Board
                    counter={counter}
                    setCounter={setCounter}
                    board={gameBoard}
                    started={started}
                    winner={winner}
                    setBoard={setGameBoard}
                    setWinner={setWinner}
                    player={player}
                    setPlayer={setPlayer}
                    player2={player2}
                    setPlayer2={setPlayer2}
                />
            </div>

            <div className={winner === null ? `${TictactoeStyles.hidden}` : `${TictactoeStyles.Visible}`}>
                {winner === '=' ? <h2 className={TictactoeStyles.winner}>Döntetlen</h2> : <h2 className={TictactoeStyles.winner}>{winner} nyert!</h2>}
            </div>
            <div className={TictactoeStyles.buttonGroup}>
                <div>
                    <button className={`${TictactoeStyles.button} ${player === null ? TictactoeStyles.disabled : ''}`} onClick={() => setStarted(true)} disabled={player === null}>Start</button>
                    <button className={TictactoeStyles.button} onClick={resetGame}><Link className={TictactoeStyles.Link} to="/Home">Vissza</Link></button>
                </div>
                <div>
                    <button className={TictactoeStyles.button} onClick={resetGame} disabled={player === null}>Új játék</button>
                </div>
                
                <h3 className={TictactoeStyles.buttonText}>Jelenlegi játékos karaktere:</h3>
                <div>
                    <button className={`${TictactoeStyles.button} ${player === 'X' ? TictactoeStyles.selected : ''}`}disabled={started} onClick={() => {setPlayer('X');setPlayer2('O');}}>X</button>
                    <button className={`${TictactoeStyles.button} ${player === 'O' ? TictactoeStyles.selected : ''}`}disabled={started}onClick={() => {setPlayer('O'); setPlayer2('X');}}>O</button>
                </div>
            </div>
        </div>
    );
};

export default Tictactoe;