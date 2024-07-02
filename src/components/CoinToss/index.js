// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tail: 0, total: 0, isAactive: true}

  onCount = () => {
    const random = Math.floor(Math.random() * 2)
    if (random === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({isAactive: true})
    } else {
      this.setState(prevState => ({tail: prevState.tail + 1}))
      this.setState(prevState => ({total: prevState.total + 1}))
      this.setState({isAactive: false})
    }
  }

  render() {
    const {heads, tail, total, isAactive} = this.state
    return (
      <div className="big-container">
        <div className="small-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {isAactive ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="image"
              alt="toss result"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="image"
              alt="toss result"
            />
          )}
          <button type="button" onClick={this.onCount} className="button">
            Toss Coin
          </button>
          <div className="count-conatiner">
            <p className="para2">Total:{total}</p>
            <p className="para2">Heads:{heads}</p>
            <p className="para2">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
