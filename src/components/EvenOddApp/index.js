import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      const num = Math.floor(Math.random() * 100) + prevState.count
      return {count: num}
    })
  }

  render() {
    const {count} = this.state
    console.log(count)
    let res
    if (count % 2 === 0) {
      res = 'Even'
    } else {
      res = 'Odd'
    }
    return (
      <div className="bg-container">
        <h1 className="head">Count {count}</h1>
        <p className="para">Count is {res}</p>
        <button onClick={this.onIncrement} className="button" type="button">
          Increment
        </button>
        <p className="para1">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
