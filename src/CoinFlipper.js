import React, { Component } from 'react'
import Coin from './Coin';
import './CoinFlipper.css';

class CoinFlipper extends Component {
  constructor(props){
    super(props);
    this.state = { flips: [], isRolling: false }
  }
  handleClick = () => {
    const side = Math.random() < 0.5 ? 'head' : 'tail';
    const flips = [...this.state.flips, side];
    this.setState({flips, isRolling: true});
    setTimeout(() => this.setState({isRolling: false}), 1000);

  }
  render(){
    const {flips, isRolling} = this.state;
    const heads = flips.filter(side => side === 'head').length;
    const tails = flips.length - heads;
    return (
      <div className="CoinFlipper">
        <h1>Let's flip a coin</h1>
        <Coin side={flips[flips.length -1]} isRolling={isRolling} />
        <button disabled={isRolling} onClick={this.handleClick} >{isRolling? 'Rolling...' : 'Flip me!'}</button>
        <p>Out of <span className="CoinFlipper-number">{flips.length} flip{flips.length > 1 && 's'}</span>, there have been <span className="CoinFlipper-number">{heads} head{heads > 1 && 's'}</span> and <span className="CoinFlipper-number">{tails} tail{tails > 1 && 's'}</span>.</p>
      </div>
    )
  }
}

export default CoinFlipper;