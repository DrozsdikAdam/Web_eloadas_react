import React, { useState } from 'react';
import TictactoeStyles from '../styles/tictactoe.module.css';
import { Link } from 'react-router-dom'
const Tictactoe = () => {
    const [Winner, setWinner] = useState(null);
    const [Player, setPlayer] = useState(null);
    const [Game, setGame] = useState(null);
    return (
        <div className={TictactoeStyles.container}>
            <h1 className={TictactoeStyles.title}>Tic Tac Toe Game</h1>
            <div className="game-board">

            </div>

            <div className={Winner === null ? `${TictactoeStyles.hidden}` : `${TictactoeStyles.Visible}`}>
                {
                    Winner === '=' ? <h2 className={TictactoeStyles.winner}>Döntetlen</h2> : <h2 className={TictactoeStyles.winner}>{Winner} nyert!</h2>
                }
            </div>
            <div className={TictactoeStyles.buttonGroup}>
                <div>
                    <button className={TictactoeStyles.button}>Új játék</button>
                    <button className={TictactoeStyles.button}><Link className={TictactoeStyles.Link} to="/Home">Vissza</Link></button>
                </div>
                <div>
                    <button className={TictactoeStyles.button} onClick={()=> setGame('local')}>Helyi játék</button>
                    <button className={TictactoeStyles.button} onClick={()=> setGame('solo')}>Gép elleni játék</button>
                </div>
                <h3 className={TictactoeStyles.buttonText} >Első játékos karaktere:</h3>
                <div>
                    <button className={TictactoeStyles.button} onClick={() => setPlayer('X')}>X</button>
                    <button className={TictactoeStyles.button} onClick={() => setPlayer('O')}>O</button>
                </div>

            </div>
        </div>
    );
};

export default Tictactoe;
