import React, { useEffect, useState } from "react";
import MemoryStyles from "../styles/memory.module.css";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";

const Memory = () => {
  const [Cards, setCards] = useState(["A", "B", "C", "D", "A", "B", "C", "D"]);
  const [count, setCount] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...Cards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const resetGame = () => {
    setCards(["A", "B", "C", "D", "A", "B", "C", "D"]);
    setCount(0);
  };
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <div className={MemoryStyles.container}>
        <h1 className={MemoryStyles.title}>Memory Game</h1>
        <div className={MemoryStyles.board}>
        {Cards.map((card, index) => (
            <Card key={index} image={card} />
        ))};
        </div>

        <div className={MemoryStyles.buttonGroup}>
          <button className={MemoryStyles.button}>Start</button>
          <button className={MemoryStyles.button} onClick={resetGame}>
            <Link className={MemoryStyles.Link} to="/Home">Vissza</Link>
          </button>
          <br />
          <button className={MemoryStyles.button} onClick={() => {resetGame(); shuffleCards()}}>Új játék</button>
        </div>
      </div>
    </>
  );
};

export default Memory;
