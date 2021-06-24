import React, { Component } from 'react'

class SearchBar extends Component {
handleFormSubmit = (event) => {
  event.preventDefault()
}

  render() {
    return (
      
      <form onSubmit={this.handleFormSubmit}>
        <div className="form">
          <div className="col-12">
            <input
              className="form-control"
              onChange={this.props.searchMovieProp}
              type="text"
              placeholder="Search a Movie" />
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar
