import React, { useState } from 'react';
import MemoryStyles from '../styles/memory.module.css';

const Memory = () => {
    const [Cards, setCards] = useState(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']);
    const [count, setCount] = useState(0);

    const resetGame = () => {
        setCards(['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']);
        setCount(0);
    };
    return(
        <>
            <div className={MemoryStyles.container}>
                <h1 className={MemoryStyles.title}>Memory Game</h1>
                <div className={MemoryStyles.board}>
                    
                </div>

                <div className={MemoryStyles.buttonGroup}>
                    <button className={MemoryStyles.button}>Start</button>
                    <button className={MemoryStyles.button} onClick={resetGame}>
                        <Link className={MemoryStyles.Link} to="/Home">Vissza</Link>
                    </button>
                    <br />
                    <button className={MemoryStyles.button}>Új játék</button>
                </div>
            </div>
        </>
    )
}

export default Memory;