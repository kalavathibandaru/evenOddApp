// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  generateRandomNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading"> Count {count} </h1>
          <p className="paragraph1"> Count is {displayText} </p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNumber}
          >
            Increment
          </button>
          <p className="paragraph2">
            *Increase By Random Number Between 0 to 100{' '}
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
