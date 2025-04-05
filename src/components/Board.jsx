import React, { useRef, useEffect } from 'react';
import BoardStyles from '../styles/board.module.css'

const Board = (props) => {

    const cellRefs = useRef([]);
    useEffect(() => {
        cellRefs.current = cellRefs.current.slice(0, props.board.length);
    }, [props.board]);

    const handleClick = (index) => {

        if (props.game === null || props.player === null || props.board[index] !== ' ' || props.winner) {
            return; 
        }

        const newBoard = [...props.board];
        cellRefs.current[index].classList.add(BoardStyles.rotate);
        newBoard[index] = props.player;
        setTimeout(() => {
            props.setBoard(newBoard);
        },450);
        
        //checking the winner

        
        props.game==='local' ? props.setPlayer(props.player === 'X' ? 'O' : 'X') : null;


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