import React from 'react';
import './Coin.css';
import  CoinTail from './coin-tail.gif';
import CoinHead from './coin-head.gif';

const Coin = ({side, isRolling}) => {
  return (
    <div className="Coin-container">
      <div className={`Coin ${isRolling? 'Coin-rotate' : ''}`}>
        <img src={CoinHead} alt='2 euro coin Finland head' className={(side === 'tail' ? 'Coin-back' : 'Coin-front')} />
        <img src={CoinTail} alt='2 euro coin Finland tail' className={(side === 'tail' ? 'Coin-front' : 'Coin-back')} />
      </div>
    </div>
  )
}

export default Coin;