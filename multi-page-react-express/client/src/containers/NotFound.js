import React, { Component } from 'react'
import appLogo from '../images/app-logo.png'
import style from '../style/App.css'

class NotFound extends Component {
  render() {
    return (
			<div className={style.notFoundDiv}>
				<img className={style.notFoundImage} src={appLogo}/>
				<h1>Page Not Found</h1>
				<p>Sorry, there is nothing to see here.</p>
			</div>
    );
  }
}

export default NotFound;
