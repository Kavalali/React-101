import React, { Component } from 'react'
import MoiveList from './MovieList'
import SearchBar from './SearchBar'
import axios from 'axios'


class App extends Component {
  state = {
    movies : [],
    queryString : ""
  }


async componentDidMount(){
  const response = await axios.get('http://localhost:3002/movies');
  console.log(response);
  this.setState({
    movies : response.data
  })
}

  deleteMovie = (movies) => {
    axios.delete(`http://localhost:3002/movies/${movies.id}`)
    const newMovieList = this.state.movies.filter(
      m => m.id !== movies.id
    );

    this.setState({ movies: newMovieList })
  }

  searchMovie = (event) => {
    this.setState({
      queryString : event.target.value
    })
  }
  

  render() {
    let filteredMovies = this.state.movies.filter(
      (movies) => {
        return movies.name.toLowerCase().indexOf(this.state.queryString.toLowerCase()) !== -1
      }
    )
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <SearchBar   searchMovieProp = {this.searchMovie}/>
          </div>
        </div>
        <MoiveList
          movies={filteredMovies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    )
  }
}

export default App
