import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import FooterBar from '../components/FooterBar'
import style from '../style/App.css'
import * as utils from '../utils/utils.js'

class Movies extends Component {
  
  render() {
    return (
      <div>
      <NavBar type={0}/>
      <br></br>
      <p className={style.comingSoon}>🚧</p>
      <FooterBar/>
      </div>
    );
  }
}

export default Movies;
