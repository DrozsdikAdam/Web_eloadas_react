import React, { useRef, useEffect } from "react";
import BoardStyles from "../styles/board.module.css";

const Board = (props) => {
    const cellRefs = useRef([]);
    useEffect(() => {
        cellRefs.current = cellRefs.current.slice(0, props.board.length);
    }, [props.board]);

    const handleClick = (index) => {
        if (
            props.game === null ||
            props.player === null ||
            props.board[index] !== " " ||
            props.winner
        ) {
            return;
        }

        const currentPlayer = props.player;

        const newBoard = [...props.board];
        newBoard[index] = currentPlayer;
        if (currentPlayer === "X") {
            cellRefs.current[index].classList.add(BoardStyles.rotate);
        } else {
            cellRefs.current[index].classList.add(BoardStyles.rotateBack);
        }
        

        setTimeout(() => {
            props.setBoard(newBoard);

            props.setCounter(props.counter + 1);

            const potentialWinner = checkWinner(newBoard);
        if (potentialWinner !== null) {
            props.setWinner(potentialWinner);
            return;
        }

        if (props.winner === null) {
            props.setPlayer(props.player === "X" ? "O" : "X");
        }
        }, 450);

        
    };

    const checkWinner = (board) => {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (board[i*3] !== " " && board[i*3] === board[i*3 + 1] && board[i*3] === board[i*3 + 2]) {
                return board[i*3]; // <--- CORRECT: Returning the character
            }
            if (board[i] !== " " && board[i] === board[i + 3] && board[i] === board[i + 6]) {
                return board[i]; // <--- CORRECT: Returning the character
            }
        }
        if (board[0] !== " " && board[0] === board[4] && board[0] === board[8])return board[0];
        if (board[2] !== " " && board[2] === board[4] && board[2] === board[6])return board[2];

        // Check for draw
        if (props.counter === 8) return '=';
        return null;
    };

    return (
        <>
            <div className={BoardStyles.board}>
                {props.board.map((cell, index) => (
                    <p
                        key={index}
                        className={`${BoardStyles.cell} ${props.started === false ? BoardStyles.disabled : ""}`}
                        ref={(el) => (cellRefs.current[index] = el)}
                        onClick={() => handleClick(index)}
                    >
                        {cell}
                    </p>
                ))}
            </div>
        </>
    );
};

export default Board;