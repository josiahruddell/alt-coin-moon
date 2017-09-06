import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { getTicker } from '../redux/coins/thunks'
import { getOrderedCoinsSelector } from '../redux/coins/reducer'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(getTicker())
  }

  render() {
    const { coins } = this.props
    return (
      <div className="App">
        <div className="App-header">
          { coins.map(x => <div>{x.name}</div>) }
        </div>
      </div>
    )
  }
}

export default connect(({ coins }) => ({ coins: getOrderedCoinsSelector(coins) }))(App)