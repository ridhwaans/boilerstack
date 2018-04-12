import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import style from '../style/App.css'
import * as utils from '../utils/utils.js'

class Music extends Component {

  render() {
    return (
      <div>
      <NavBar type={1}/>
      <br></br>
      <p className={style.comingSoon}>🚧</p>
      </div>
    );
  }

}

export default Music;