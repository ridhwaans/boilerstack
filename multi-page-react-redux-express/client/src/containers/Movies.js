import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as moviesActions from '../actions/MoviesActions'

import NavBar from '../components/NavBar'
import ResultsBar from '../components/ResultsBar'
import FooterBar from '../components/FooterBar'
import * as utils from '../utils/utils.js'

class Movies extends Component {

  handleSearch(e) {
    this.props.moviesActions.filterMovies(e.target.value)
  }

  componentDidMount() {
    this.props.moviesActions.fetchMovies()
  }
  
  render() {
    let { displayedMovies } = this.props.moviesReducer

    return (
      <div>
      <NavBar onChange={this.handleSearch.bind(this)} type={0}/>
      <br/>
      <ResultsBar count={displayedMovies.length} type={0}/>
      <p>{JSON.stringify(displayedMovies)}</p>
      <FooterBar/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    moviesReducer: state.moviesReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    moviesActions: bindActionCreators(moviesActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
