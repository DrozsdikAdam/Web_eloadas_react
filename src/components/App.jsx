import React from 'react';
import AppStyles from '../styles/app.module.css'
import Placeholder from '../images/image.png'
function App() {

  return (
    <>
      <div className={AppStyles.container}>
        <div className={AppStyles.card}>
          <h1 className={AppStyles.title}>Tic-tac-toe Game</h1>
          <img src={Placeholder} className={AppStyles.image} alt="Tic-tac-toe" />
          <div className={AppStyles.buttonGroup}>
              <button>Start</button>
          </div>
        </div>
        <div className={AppStyles.card}>
        <h1 className={AppStyles.title}>Valami másik Project</h1>
          <img src={Placeholder} className={AppStyles.image} alt="" />
          <div className={AppStyles.buttonGroup}>
              <button>Start</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
