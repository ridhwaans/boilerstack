import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import ResultsBar from '../components/ResultsBar'
import FooterBar from '../components/FooterBar'
import style from '../style/App.css'
import * as utils from '../utils/utils.js'

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: []
    };
  }

  componentDidMount() {
    utils.callApi('/api/greeting')
      .then(res => this.setState({ greeting: res }))
      .catch(err => console.log(err));
  }
  
  render() {
    console.log(JSON.stringify(this.state.greeting))
    return (
      <div>
      <NavBar type={1}/>
      <br/>
      <ResultsBar type={1}/>
      <FooterBar/>
      </div>
    );
  }

}

export default Music;
