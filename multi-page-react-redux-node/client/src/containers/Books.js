import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import FooterBar from '../components/FooterBar'
import style from '../style/App.css'
import * as utils from '../utils/utils.js'

class Books extends Component {

  render() {
    return (
      <div>
      <NavBar type={3}/>
      <br></br>
      <p className={style.comingSoon}>🚧</p>
      <FooterBar/>
      </div>
    );
  }

}

export default Books;
