import React, { useState, useRef } from 'react';
import MemoryStyles from "../styles/memory.module.css";

import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import A from "../images/A.jfif";
import B from "../images/B.jpg";
import C from "../images/C.png";
import D from "../images/D.jpg";

const Memory = () => {
  const [cards, setCards] = useState(
    [
      { id: 0, name: "John Pork", status: "", img: A },
      { id: 0, name: "John Pork", status: "", img: A },
      { id: 1, name: "Tim Cheese", status: "", img: B },
      { id: 1, name: "Tim Cheese", status: "", img: B },
      { id: 2, name: "Trallalero Trallala", status: "", img: C },
      { id: 2, name: "Trallalero Trallala", status: "", img: C },
      { id: 3, name: "Bombardillo Crocodillo", status: "", img: D },
      { id: 3, name: "Bombardillo Crocodillo", status: "", img: D },
    ].sort(() => Math.random() - 0.5)
  );
  const [Count, setCount] = useState(0);
  const [Steps, setSteps] = useState(0);
  const [previousCardState, setPreviousCardState] = useState(-1);
  const previousIndex = useRef(-1);
  const [gameKey, setGameKey] = useState(0);
  const [winner, setWinner] = useState(false);
   


  const resetGame = () => {
    setGameKey(gameKey + 1);
    setCards(
      [
        { id: 0, name: "John Pork", status: "", img: A },
        { id: 0, name: "John Pork", status: "", img: A },
        { id: 1, name: "Tim Cheese", status: "", img: B },
        { id: 1, name: "Tim Cheese", status: "", img: B },
        { id: 2, name: "Trallalero Trallala", status: "", img: C },
        { id: 2, name: "Trallalero Trallala", status: "", img: C },
        { id: 3, name: "Bombardillo Crocodillo", status: "", img: D },
        { id: 3, name: "Bombardillo Crocodillo", status: "", img: D },
      ].sort(() => Math.random() - 0.5)
    );
    setWinner(false);
    setSteps(0);
    setPreviousCardState(-1);
    previousIndex.current = -1;
    setCount(0);
  }


  const matchCheck = (currentCard) => {
    if (cards[currentCard].id === cards[previousCardState].id) {
      setCount(Count + 1);
      cards[previousCardState].status = "active matched";
      cards[currentCard].status = "active matched";
      setPreviousCardState(-1);
      if (Count === 3) {
        setWinner(true);
      }
    } else {
      cards[currentCard].status = "active";
      setCards([...cards]);
      setTimeout(() => {
        setPreviousCardState(-1);
        cards[currentCard].status = "unmatch";
        cards[previousCardState].status = "unmatch";
        setCards([...cards]);
      }, 1000);
    }
  };

  const clickhandler = (index) => {
    setSteps(Steps + 1);
    if (index !== previousIndex.current) {
      if (cards[index].status === "active matched") {
        alert("Már van egyezés");
      } else {
        if (previousCardState === -1) {
          previousIndex.current = index;
          cards[index].status = "active";
          setCards([...cards]);
          setPreviousCardState(index);
        } else {
          matchCheck(index);
          previousIndex.current = -1;
        }
      }
    } else {
      alert("A kártya jelenleg ki van jelölve");
    }
  };

  return (
    <>
      <div className={MemoryStyles.container}>
        <h1 className={MemoryStyles.title}>Memory Game</h1>
        <div key={gameKey} className={MemoryStyles.board}>
          {cards.map((card, index) => {
            return (
              <Card key={index} card={card} gameKey={gameKey} index={index} clickhandler={clickhandler}/>
            );
          })};
        </div>
          <div className={winner === false ? `${MemoryStyles.hidden}` : `${MemoryStyles.Visible}`}>
                          <h2 className={MemoryStyles.winner}>Nyertél {Steps} lépésből!</h2>
          </div>
        <div className={MemoryStyles.buttonGroup}>
        <button className={MemoryStyles.button} onClick={resetGame}>Új játék</button>
          <button className={MemoryStyles.button} onClick={resetGame}>
            <Link className={MemoryStyles.Link} to="/Home">Vissza</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Memory;
