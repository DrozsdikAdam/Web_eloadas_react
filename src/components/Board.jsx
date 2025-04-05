import React, { useRef, useEffect } from 'react';
import BoardStyles from '../styles/board.module.css'

const Board = (props) => {

    const cellRefs = useRef([]);
    useEffect(() => {
        cellRefs.current = cellRefs.current.slice(0, props.board.length);
    }, [props.board]);

    const handleClick = (index) => {
        // Check if the game or player is not selected, or if the cell is already filled, or if there is a winner
        if (props.game === null || props.player === null || props.board[index] !== ' ' || props.winner) {
            return; // Do nothing if the game is not started or the cell is filled or there is a winner
        }

        // Update the board with the current player's mark
        const newBoard = [...props.board];
        cellRefs.current[index].classList.add(BoardStyles.rotate);
        newBoard[index] = props.player;
        setTimeout(() => {
            props.setBoard(newBoard);
        },450);
        

        
        props.game==='local' ? props.setPlayer(props.player === 'X' ? 'O' : 'X') : null;

        // Check for a winner
        /*const winnerResult = calculateWinner(newBoard);
        if (winnerResult) {
            setWinner(winnerResult);
        } else if (newBoard.every((cell) => cell !== ' ')) {
            setWinner('='); // It's a draw
        } else {
            // Switch to the other player
            setPlayer(player2);
            setPlayer2(player);
        }*/
    };

    return (
        <>
            <div className={BoardStyles.board}>
                {props.board.map((cell, index) => (
                    <p key={index} className={`${BoardStyles.cell} ${props.started === false ? BoardStyles.disabled : ''}`} ref={(el) => (cellRefs.current[index] = el)} onClick={() => handleClick(index)}>{cell}</p>
                ))}
            </div>

        </>
    )
}

export default Board;