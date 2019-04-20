import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import * as utils from '../utils/utils.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: ''
    };
  }

  componentDidMount() {
    utils.callApi('/api/greeting')
      .then(res => this.setState({ greeting: res }))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <div>
        	<p id="hello">{JSON.stringify(this.state.greeting)}</p>
        </div>
      )
  }
}

export default App;