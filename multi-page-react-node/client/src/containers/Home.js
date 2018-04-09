import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div>
      <div className="d-flex h-100 flex-column text-center">
      <header className="masthead mb-auto">
        <div className="inner">
          <h1 className="masthead-brand">app</h1>
          <nav className="nav justify-content-center">
            <a className="nav-link" href="movies">🎥 Movies</a>
            <a className="nav-link" href="tv">📺 TV</a>
            <a className="nav-link" href="music">🎵 Music</a>
            <a className="nav-link" href="books">📚 Books</a>
            <a className="nav-link" href="comics">📒 Comics</a>
            <a className="nav-link" href="podcasts">🎙️ Podcasts</a>
          </nav>
        </div>
      </header>
      <main role="main" className="inner cover">
        <h2 className="cover-heading">multi-page-react-node app</h2>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p className="lead">
          <a href="https://github.com/ridhwaans/boilerstack/" className="btn btn-primary">View on Github</a>
        </p>
      </main>
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>Made with ❤️ by <a href="https://github.com/ridhwaans">@ridhwaans</a></p>
        </div>
      </footer>
      </div>
      </div>
    );
  }

}

export default Home;
